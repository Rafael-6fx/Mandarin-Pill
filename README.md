# Mandarin language pill

A hundred everyday Mandarin phrases, grouped by the job they do, with tone-coloured Pinyin. It's a cheat sheet and a self-test in one: hide the Pinyin or the English and tap a phrase to check yourself.

**Status:** draft. Have a native speaker check the Pinyin before you drill it.

## What's in the folder

```
index.html              the page
data/mandarin.js        the phrases (edit this one)
assets/style.css        layout, tone colours, print layout
assets/pill.js          turns tone numbers into marks and colours; the show/hide buttons
assets/fonts/           Crimson Pro, self-hosted, plus its licence (OFL.txt)
.nojekyll               tells GitHub Pages to serve the files as they are
```

It runs without a build step. You can double-click `index.html` and it works offline. That's why the phrases live in a `.js` file and not a `.json` file: browsers block `.json` loading from a local folder.

## Put it online with GitHub Pages

### In the browser, no git needed

1. Go to <https://github.com/new>. Name the repository `language-pill`, set it to **Public**, and click **Create repository**.
2. On the empty repo page, click **uploading an existing file**.
3. Open this folder, select **everything inside it** (including `.nojekyll`), and drag it all onto the page. `index.html` must sit at the top level, not inside a `language-pill` subfolder.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main` and the folder to `/ (root)`. Click **Save**.
6. After a minute or two the site is live at `https://<your-username>.github.io/language-pill/`. The Pages settings screen shows the link once it's ready.

### With git

```bash
cd language-pill
git init -b main
git add .
git commit -m "Mandarin language pill, first draft"
git remote add origin https://github.com/<your-username>/language-pill.git
git push -u origin main
```

Then do step 5 above.

### Updating

Edit the files and upload them again (or commit and push). The site rebuilds by itself within a minute or two.

Free GitHub Pages sites are public, even though the content is only phrases. The limits are 1 GB per site and 100 GB of traffic a month.

## Editing phrases

Each phrase in `data/mandarin.js` looks like this:

```js
{ n: 43, en: "I'm getting hungry.", py: "Wo3 you3>2dian3 e4 le5.", note: "Final {le5} marks the new situation." }
```

Pinyin is typed with **tone numbers**, and the page adds the marks. That means you never have to type ǎ, and you can't pick up the look-alike ă (a breve, the wrong character) by accident.

| Type | You get | Meaning |
|---|---|---|
| `ma1` `ma2` `ma3` `ma4` | mā má mǎ mà | the four tones |
| `ma5` | ma | neutral tone |
| `lv4` or `lu:4` | lǜ | ü |
| `nar3` | nǎr | erhua: put the r before the number |
| `wo3>2` | wǒ, said wó | a tone change in speech (gets the dotted underline) |
| `gang1cai2` | gāngcái | syllables written together form one word |
| `___` | a blank line | a slot to fill in |

- In `note` and `grammar` text, wrap Pinyin in braces to colour it: `{gang1cai2}`.
- Optional per phrase: `hanzi: "我有点饿了。"` shows the characters above the Pinyin.
- Keep `n` unique. The page links to each phrase as `#p43` and so on.

## Tone colours

The colours are CSS variables at the top of `assets/style.css` (`--t1` to `--t5`), written in `oklch()` at equal lightness, so no tone looks louder than another. Each one clears 4.5:1 contrast on the page background in both light and dark mode. A commented-out alternative maps lightness to pitch height instead.

Colour is never the only cue: tone marks are always there, and you can switch colour off as a test.

## The font

Crimson Pro 1.003 (the Google Fonts release) **has no ready-made glyphs for ǎ ǐ ǒ ǔ or ǖ ǘ ǚ ǜ**. Chrome quietly builds them from the font's own accents; other browsers may substitute a different font for just those letters. So `assets/pill.js` writes those letters as a base letter plus a combining accent, which every browser draws in Crimson Pro (see `BUILD_FROM_PARTS`).

That's also why the font is self-hosted and not loaded from Google Fonts: Google splits fonts into subsets and the combining caron may not be in any of them, while the copy here is guaranteed to include it. Self-hosting also pins the version. The files in `assets/fonts` are cut down to Latin plus accents (about 90 KB each) and keep the full weight range. Crimson Pro is under the SIL Open Font License; `OFL.txt` has to stay next to the font files.

Inter, used for the buttons and labels, still loads from Google Fonts. It never shows Pinyin.

## Printing

Print from the browser for an A4 sheet in two columns. It prints whatever you have hidden, so you can hide the English and print a test sheet.
