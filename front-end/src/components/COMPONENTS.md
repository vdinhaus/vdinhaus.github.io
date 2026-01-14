# 📁

Astro Component Folder Guide A recommended structure for organizing components in an Astro

Each folder has a clear purpose to keep your project modular, scalable, and easy to navigate.

---

## 🎨 `ui/` — Atomic, Reusable UI Elements

Small, generic building blocks used across the entire site.

**Examples:**

- `Button.astro`
- `Card.astro`
- `Badge.astro`
- `Input.astro`
- `Tooltip.astro`

**Use when:**  
The component is generic, stateless, and reusable in any context.

---

## 🧱 `wrappers/` — Page‑Level Structural Wrappers

Defines the skeleton of a page (header, footer, sidebar, slots).

**Examples:**

- `BaseLayout.astro`
- `DashboardLayout.astro`
- `AuthLayout.astro`

**Use when:**  
You’re wrapping entire pages, not individual sections.

---

## 🧩 `sections/` — Page Sections / Content Blocks

Larger composed components that represent meaningful sections of a page.

**Examples:**

- `Hero.astro`
- `Navbar.astro`
- `Footer.astro`
- `FeaturesSection.astro`
- `CTASection.astro`

**Use when:**  
The component represents a named section of a page.

---

## 📦 `data/` — Components That Render Structured Data

Takes arrays/objects and displays them using UI components.

**Examples:**

- `BlogList.astro`
- `FAQList.astro`
- `ProductGrid.astro`
- `StatsRow.astro`

**Use when:**  
The component’s main prop is a dataset.

---

## 🖼️ `icons/` — SVG Icons and Icon Utilities

Inline SVGs or a dynamic icon component.

**Examples:**

- `Icon.astro`
- `IconArrowRight.astro`
- `IconMenu.astro`

**Use when:**  
It’s purely an icon or icon wrapper.

---

## 📝 `forms/` — Form Fields and Reusable Form Blocks

Reusable form components or composed form groups.

**Examples:**

- `TextField.astro`
- `SelectField.astro`
- `LoginForm.astro`
- `NewsletterForm.astro`

**Use when:**  
It’s form‑specific UI or a reusable form pattern.

---

## 🧭 Quick Decision Guide

| If the component is…                | Put it in…  |
| ----------------------------------- | ----------- |
| A tiny reusable UI piece            | `ui/`       |
| A wrapper for entire pages          | `wrappers/` |
| A recognizable page section         | `sections/` |
| Rendering lists or structured data  | `data/`     |
| An SVG or icon system               | `icons/`    |
| A reusable form field or form block | `forms/`    |
