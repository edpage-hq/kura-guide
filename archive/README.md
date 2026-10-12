# archive/

Frozen past versions of the docs, one folder per version, each mirroring the shape of `src/` (root locale content + `en/`).

This folder is empty until the documented project cuts its first version bump. To add one:

1. Copy `src/` into `archive/<version>/` (e.g. `archive/1.0.0/`).
2. Bump `versionsConfig.current` in `.vitepress/config/index.ts` to the new current version.
3. Keep editing `src/` going forward — it always represents the current, unprefixed version.

The version switcher in the nav picks up folders under here automatically; nothing else to wire up. See [CLAUDE.md](../CLAUDE.md#versioning) for details.

This file itself isn't part of the versioned content — it won't appear in the built site.
