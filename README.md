# Jordyn Rabinowitz — Teaching Portfolio

A responsive, no-build static portfolio for GitHub Pages. Built with plain HTML, CSS, and JavaScript (no framework or external dependencies).

## Pages

- `index.html` — homepage, projects, about, ongoing inquiry, and contact links
- `philosophy.html` — complete teaching philosophy
- `projects/*.html` — six project case studies
- `assets/styles.css` — site design and mobile layout
- `assets/main.js` — working mobile navigation, project filtering, and footer year

## Publishing with GitHub Pages

**Option 1: Browser / GitHub web interface**

1. Sign into GitHub and create a new **public** repository named `teaching-portfolio` (or another name).
2. Unzip the downloaded portfolio package and upload its **contents** to the root of that repository. The `index.html`, `philosophy.html`, `assets`, and `projects` entries should be in the repository root, not enclosed in an extra directory. GitHub's **Add file → Upload files** is usually easiest on desktop. On an iPad, use GitHub Codespaces to add files if folder uploads are difficult.
3. Commit the changes to `main`.
4. Open **Settings → Pages** and choose **Deploy from a branch**, then **main** and **/(root)**. Save.
5. GitHub will provide the real published URL under Pages after its deployment completes. For a repository named `teaching-portfolio`, the URL normally uses the pattern `https://USERNAME.github.io/teaching-portfolio/`.

**Option 2: Git command line**, from inside the unzipped directory:

```sh
git init
git branch -M main
git add .
git commit -m "Launch teaching portfolio draft"
git remote add origin https://github.com/YOUR_USERNAME/teaching-portfolio.git
git push -u origin main
```

Create the empty GitHub repository first, and replace `YOUR_USERNAME` with your actual account name.

## How to customize

- **Headline / About / project cards:** open `index.html` and edit the text in place.
- **Full philosophy:** edit `philosophy.html`. Its four paragraphs reflect the most recently user-edited teaching philosophy draft supplied in this conversation.
- **Project writeups:** edit the appropriate `.html` file in `projects/`.
- **Colors and spacing:** edit the CSS variables at the top of `assets/styles.css`.
- **Photos and illustrations:** place approved files inside `assets/`, add `<img>` elements in the relevant sections, and add good `alt` text. The current site uses simple CSS illustrations as placeholders.
- **Contact information:** add a professional email only if you want to publish it publicly. The current site links to LinkedIn and GitHub only.

## Before making the site public

- Confirm the precise wording of your role in collaborative CU Boulder Image assignments. Distinguish your work from the contributions of the instructor and other LAs.
- Replace project visual placeholders with your own photos, instructional screenshots, or carefully selected artifacts.
- **Never post student names, faces, grades, unique identifiers, or identifiable work without explicit required permissions.** Use anonymized or recreated examples instead.
- Update the linear-relationships case study **after the planned November 30, 2026 lesson**; do not claim it was taught beforehand.
- Update master's inquiry methods, results, and conclusions only when the project is actually completed.
- Check school/district policies before publishing school materials, assessment prompts, or classroom images.
- Review LinkedIn and GitHub links to ensure you want them public.

## Status

**Draft site — ready to preview and publish when you decide.** Actual research findings, classroom photos, and any private teaching artifacts are intentionally not included.


## Featured photography (November 2026 update)

Two personal photos were selected intentionally, rather than turning the teaching portfolio into a graduation gallery:

- `assets/images/jordyn-graduation-portrait.webp` — hero photo in `index.html`.
- `assets/images/jordyn-first-day-teaching.webp` — supporting image in the About section.

The other supplied photos were intentionally **not added**. To change either image, replace the WebP file with another photo using the same filename, or edit the `src` attribute in `index.html`.
