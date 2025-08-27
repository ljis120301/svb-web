
## Sun Valley Broadband Website
This is SVB's main website. I built it in Next JS. It is meant to be run as a Kubernetes Cluster or in the worst case a docker container. Within this repo is a dockerfile in order to build locally easily. Or follow typical Next JS setup procedured of running the site. 

```bash
# 
cd /svb-web

bun i 

bun run dev
```

```bash
# docker way 
cd svb-web/

sudo docker build -t ljis120301/svb-web:latest .

sudo docker run ljis120301/svb-web:latest

