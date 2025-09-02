"use client";

import useSWR from "swr";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TipTapEditor } from "@/components/author/TipTapEditor";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, FileText, Eye, Trash2, Plus, Settings, Save, CheckCircle, Edit3 } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AuthorPortalPage() {
  const { data, mutate } = useSWR("/api/articles?take=100", fetcher);
  
  const [form, setForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    contentJson: null as any,
    html: "",
    tagsCsv: "",
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [showNewArticleDialog, setShowNewArticleDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState<"create" | "edit" | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; article: any | null }>({
    open: false,
    article: null,
  });
  const [editMetadataDialog, setEditMetadataDialog] = useState<{ open: boolean; article: any | null }>({
    open: false,
    article: null,
  });
  const [metadataForm, setMetadataForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    tagsCsv: "",
    published: true,
  });

  // Debug helper to inspect interactivity state
  function logDialogState(context: string) {
    try {
      const overlays = Array.from(document.querySelectorAll('[data-slot="alert-dialog-overlay"]')) as HTMLElement[];
      const openOverlays = overlays.filter((o) => o.getAttribute('data-state') === 'open');
      const closedOverlays = overlays.filter((o) => o.getAttribute('data-state') === 'closed');
      const inertCount = document.querySelectorAll('[inert]')?.length ?? 0;
      const ariaHiddenCount = document.querySelectorAll('[aria-hidden="true"]')?.length ?? 0;
      const bodyPE = window.getComputedStyle(document.body).pointerEvents;
      const htmlPE = window.getComputedStyle(document.documentElement).pointerEvents;
      // eslint-disable-next-line no-console
      console.log('[AuthorPortal]', context, {
        showNewArticleDialog,
        deleteDialogOpen: deleteDialog.open,
        editMetadataDialogOpen: editMetadataDialog.open,
        overlays: { total: overlays.length, open: openOverlays.length, closed: closedOverlays.length },
        inertCount,
        ariaHiddenCount,
        pointerEvents: { body: bodyPE, html: htmlPE },
      });
    } catch (_) {}
  }

  // Clean up any dialog side-effects (pointer events, inert/aria-hidden) when dialogs close
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !deleteDialog.open &&
      !editMetadataDialog.open &&
      !showNewArticleDialog
    ) {
      logDialogState('effect: about to restore (all dialogs closed)');
      const raf = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          restorePointerEvents();
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [deleteDialog.open, editMetadataDialog.open, showNewArticleDialog]);

  async function createArticle(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const tags = form.tagsCsv
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: form.slug,
          title: form.title,
          excerpt: form.excerpt,
          contentJson: JSON.stringify(form.contentJson ?? {}),
          html: form.html,
          tags,
          published: form.published,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed");
      }
      // Keep the form filled for editing the newly created article
      setShowNewArticleDialog(false);
      setIsEditing(false);
      setEditMode("edit");
      mutate();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  async function updateArticle() {
    if (!form.slug) return;
    setSaving(true);
    setError(null);
    try {
      const tags = form.tagsCsv
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const res = await fetch(`/api/articles/${form.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          excerpt: form.excerpt,
          contentJson: JSON.stringify(form.contentJson ?? {}),
          html: form.html,
          tags,
          published: form.published,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to update");
      }
      mutate();
      setError(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  function clearFormAndStartNew() {
    setForm({
      slug: "",
      title: "",
      excerpt: "",
      contentJson: null,
      html: "",
      tagsCsv: "",
      published: true,
    });
    setEditMode("create");
    setIsEditing(false);
    setError(null);
    setShowNewArticleDialog(true);
  }

  async function deleteArticle(slug: string) {
    setSaving(true);
    setError(null);
    try {
      logDialogState('delete: start');
      const res = await fetch(`/api/articles/${slug}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to delete");
      }
      
      // Clear the editor if we're deleting the currently loaded article
      if (form.slug === slug) {
        setForm({
          slug: "",
          title: "",
          excerpt: "",
          contentJson: null,
          html: "",
          tagsCsv: "",
          published: true,
        });
        setEditMode(null);
        setIsEditing(false);
      }
      
      setDeleteDialog({ open: false, article: null });
      restorePointerEvents();
      mutate();
    } catch (e: any) {
      setError(e.message);
      setDeleteDialog({ open: false, article: null });
      restorePointerEvents();
    } finally {
      logDialogState('delete: finally');
      setSaving(false);
    }
  }

  async function updateMetadata() {
    if (!editMetadataDialog.article?.slug) return;
    setSaving(true);
    setError(null);
    try {
      logDialogState('metadata: start');
      const tags = metadataForm.tagsCsv
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const res = await fetch(`/api/articles/${editMetadataDialog.article.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: metadataForm.title,
          slug: metadataForm.slug,
          excerpt: metadataForm.excerpt,
          contentJson: editMetadataDialog.article.contentJson,
          html: editMetadataDialog.article.html,
          tags,
          published: metadataForm.published,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to update");
      }

      // Update the current form if we're editing the same article
      if (form.slug === editMetadataDialog.article.slug) {
        setForm(prev => ({
          ...prev,
          title: metadataForm.title,
          slug: metadataForm.slug,
          excerpt: metadataForm.excerpt,
          tagsCsv: metadataForm.tagsCsv,
          published: metadataForm.published,
        }));
      }

      setEditMetadataDialog({ open: false, article: null });
      restorePointerEvents();
      mutate();
    } catch (e: any) {
      setError(e.message);
      setEditMetadataDialog({ open: false, article: null });
      restorePointerEvents();
    } finally {
      logDialogState('metadata: finally');
      setSaving(false);
    }
  }

  // Simple cleanup function to restore interactivity after dialogs close
  const restorePointerEvents = () => {
    if (typeof window === 'undefined') return;
    logDialogState('restore: begin');
    const run = () => {
      // Remove any pointer-event locks
      document.body.style.removeProperty('pointer-events');
      document.documentElement.style.removeProperty('pointer-events');
      // Remove any lingering inert/aria-hidden attributes applied by dialog internals
      const affected = document.querySelectorAll('[inert], [aria-hidden="true"]');
      affected.forEach((el) => {
        const element = el as HTMLElement;
        // Skip anything inside the alert dialog portal
        if (element.closest('[data-slot="alert-dialog-portal"]')) return;
        element.removeAttribute('inert');
        if (element.getAttribute('aria-hidden') === 'true') {
          element.removeAttribute('aria-hidden');
        }
      });
      logDialogState('restore: done');
    };
    // Ensure this runs after DOM unmount/animations (double rAF + timeout >= animation duration)
    requestAnimationFrame(() => requestAnimationFrame(run));
    setTimeout(run, 250);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Author Portal</h1>
            <Badge variant="secondary">
              {data?.articles?.length || 0} articles
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <AlertDialog open={showNewArticleDialog} onOpenChange={setShowNewArticleDialog}>
              <AlertDialogTrigger asChild>
                <Button onClick={clearFormAndStartNew}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Article
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Create New Article</AlertDialogTitle>
                  <AlertDialogDescription>
                    Enter the basic information for your new article.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={createArticle} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="Article title..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      placeholder="article-url-slug"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={form.excerpt}
                      onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                      placeholder="Brief description..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={form.tagsCsv}
                      onChange={(e) => setForm({ ...form, tagsCsv: e.target.value })}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <AlertDialogFooter>
                    <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit" disabled={saving} onClick={() => setEditMode("create")}>
                      {saving ? "Creating..." : "Create & Edit"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={async () => {
                    setSeeding(true);
                    await fetch("/api/admin/seed", { method: "POST" });
                    setSeeding(false);
                    mutate();
                  }}
                  disabled={seeding}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {seeding ? "Importing..." : "Import Static Articles"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Article Metadata */}
          {form.title && (
            <div className="border-b border-border bg-muted/30 px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">{form.title}</h2>
                <Badge variant={editMode === "create" ? "default" : "secondary"}>
                  {editMode === "create" ? "New Article" : "Editing"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{form.excerpt}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>/{form.slug}</span>
                {form.tagsCsv && (
                  <div className="flex space-x-1">
                    {form.tagsCsv.split(",").map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Editor */}
          <div className="flex-1 p-6 overflow-auto relative">
            <div className="mx-auto max-w-4xl">
              {form.title ? (
                <>
                  <TipTapEditor
                    key={form.slug || 'new-article'} // Force re-render when switching articles
                    value={form.contentJson}
                    onChange={(json, html) => {
                      setForm((f) => ({ ...f, contentJson: json, html }));
                      setIsEditing(true);
                    }}
                  />
                  
                  {/* Floating Publish/Save Button */}
                  {isEditing && (
                    <div className="fixed bottom-6 right-6 z-50">
                      <Button
                        size="lg"
                        onClick={updateArticle}
                        disabled={saving}
                        className="shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        {saving ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Publish Changes
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {/* Error Display */}
                  {error && (
                    <div className="fixed bottom-6 left-6 z-50">
                      <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md shadow-lg">
                        {error}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Article Selected</h3>
                    <p className="text-muted-foreground mb-4">Create a new article to start writing</p>
                    <Button onClick={clearFormAndStartNew}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Article
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Existing Articles */}
        <div className="w-80 border-l border-border bg-muted/20">
          <div className="p-4 border-b border-border">
            <h3 className="font-medium">Articles</h3>
          </div>
          <div className="overflow-auto h-full pb-4">
            <div className="space-y-2 p-4">
              {data?.articles?.map((article: any) => (
                <div
                  key={article.slug}
                  className="group relative rounded-lg border border-border bg-background p-3 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{article.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">
                        /{article.slug}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={async () => {
                            // Fetch the full article content including content JSON
                            try {
                              const res = await fetch(`/api/articles/${article.slug}`);
                              if (res.ok) {
                                const { article: fullArticle } = await res.json();
                                setForm({
                                  slug: fullArticle.slug,
                                  title: fullArticle.title,
                                  excerpt: fullArticle.excerpt,
                                  contentJson: fullArticle.contentJson ? JSON.parse(fullArticle.contentJson) : null,
                                  html: fullArticle.html || "",
                                  tagsCsv: fullArticle.tagsJson ? JSON.parse(fullArticle.tagsJson).join(", ") : "",
                                  published: fullArticle.published,
                                });
                                setEditMode("edit");
                                setIsEditing(false);
                                setError(null);
                              }
                            } catch (error) {
                              setError("Failed to load article");
                            }
                          }}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Edit Content
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setMetadataForm({
                              title: article.title,
                              slug: article.slug,
                              excerpt: article.excerpt,
                              tagsCsv: article.tagsJson ? JSON.parse(article.tagsJson).join(", ") : "",
                              published: article.published,
                            });
                            setEditMetadataDialog({ open: true, article });
                          }}
                        >
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/support/${article.slug}`} target="_blank">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => setDeleteDialog({ open: true, article })}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Metadata Dialog */}
      <AlertDialog 
        open={editMetadataDialog.open} 
        onOpenChange={(open) => {
          if (!open) {
            setEditMetadataDialog({ open: false, article: null });
            restorePointerEvents();
          }
        }}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Article Details</AlertDialogTitle>
            <AlertDialogDescription>
              Update the title, slug, excerpt, and tags for this article.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                value={metadataForm.title}
                onChange={(e) => setMetadataForm({ ...metadataForm, title: e.target.value })}
                placeholder="Article title..."
              />
            </div>
            <div>
              <Label htmlFor="edit-slug">URL Slug</Label>
              <Input
                id="edit-slug"
                value={metadataForm.slug}
                onChange={(e) => setMetadataForm({ ...metadataForm, slug: e.target.value })}
                placeholder="article-url-slug"
              />
            </div>
            <div>
              <Label htmlFor="edit-excerpt">Excerpt</Label>
              <Textarea
                id="edit-excerpt"
                value={metadataForm.excerpt}
                onChange={(e) => setMetadataForm({ ...metadataForm, excerpt: e.target.value })}
                placeholder="Brief description..."
              />
            </div>
            <div>
              <Label htmlFor="edit-tags">Tags (comma separated)</Label>
              <Input
                id="edit-tags"
                value={metadataForm.tagsCsv}
                onChange={(e) => setMetadataForm({ ...metadataForm, tagsCsv: e.target.value })}
                placeholder="tag1, tag2, tag3"
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel 
              disabled={saving}
              onClick={() => {
                setEditMetadataDialog({ open: false, article: null });
                restorePointerEvents();
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={updateMetadata} disabled={saving}>
              {saving ? "Updating..." : "Update Details"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog 
        open={deleteDialog.open} 
        onOpenChange={(open) => {
          if (!open) {
            setDeleteDialog({ open: false, article: null });
            restorePointerEvents();
          }
        }}
      >
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the article{" "}
              <span className="font-semibold">"{deleteDialog.article?.title}"</span> and remove it from the support center.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              disabled={saving}
              onClick={() => {
                setDeleteDialog({ open: false, article: null });
                restorePointerEvents();
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteDialog.article && deleteArticle(deleteDialog.article.slug)}
              disabled={saving}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {saving ? "Deleting..." : "Delete Article"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}