FROM node:26.13.1-bookworm-slim AS build
# Public HubSpot form identifiers (safe to bake into a static page; they are visible in
# any HubSpot-embedded form's markup). Empty defaults keep the form in warn-only mode.
ARG HUBSPOT_PORTAL_ID=""
ARG HUBSPOT_FORM_GUID=""
ARG HUBSPOT_FORMS_HOST="api.hsforms.com"
WORKDIR /app
RUN npm install -g pnpm@10.32.1
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build \
 && sed -i "s|__HUBSPOT_PORTAL_ID__|${HUBSPOT_PORTAL_ID}|g; s|__HUBSPOT_FORM_GUID__|${HUBSPOT_FORM_GUID}|g; s|__HUBSPOT_FORMS_HOST__|${HUBSPOT_FORMS_HOST}|g" out/index.html

FROM nginx:1.27-alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
