
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
```

## Goals 

- remove mention of providing Cable or Wireless service. Sun Valley Broadband provides Fiber optic internet, and Beamspeed provides wireless and cable interent. 

- Additional articles. 

- Format articles

- higher resolution main hero Image

- dark mode? 

- Speed test server with LibreSpeed test, fit into docker swarm, deploy both containers simoltaniously. 



There is a build in Admin Portal for creating new blog posts as /author , however keep in mind you will also need to map the environment variable of ADMIN_PASSWORD


Social Media:

Facebook: https://www.facebook.com/SunValleyBroadband

Instagram: sun_valley_broadband

Twitter: SVB_Yuma

