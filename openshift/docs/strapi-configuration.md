# Configuring new namspaces for strapi deployment

Note: this list of secrets that need to configured may not be complete.

- In order for the strapi admin login to work, an admin JWT Token must be defined. Se the [docs](https://strapi.io/documentation/developer-docs/latest/migration-guide/migration-guide-3.0.x-to-3.1.x.html).  This is stored in the namespace secrets as:
```
valueFrom:
  secretKeyRef:
    name: strapi-jwt
    key: admin-jwt
```

