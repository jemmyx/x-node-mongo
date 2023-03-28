# Node / Mongo Starter

## Config OVH & VHost

### VHost config

Prevent page 404 on refresh single-app

Create an .htaccess at the root folder of the distribution and add this:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !server-calls
RewriteRule . /index.html [L]
</IfModule>
```

docker build . -t my-node-app-1
