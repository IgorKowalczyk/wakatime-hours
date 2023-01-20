![og-image](https://user-images.githubusercontent.com/49127376/213679714-1f9fe70b-b815-40f1-9448-8035591ff5bc.png)

<div align="center">
  <a aria-label="Badge" href="https://wakatime-hours.vercel.app">
    <img src="https://wakatime-hours.vercel.app/api/badge">
  </a>
    <a aria-label="Github License" href="https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/blog?color=blue&logo=github&label=License">
  </a>
      <a aria-label="Version" href="https://github.com/igorkowalczyk/wakatime-hours/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=Version">
  </a>
        <a aria-label="Vulnerabilities" href="https://github.com/igorkowalczyk/wakatime-hours">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=Vulnerabilities">
  </a>
  <br/>
  <br/>
  <b>Generate a badge that shows actual hours spent programming using wakatime</b>
</div>

---

> **Warning**:
> In order to display your statistics you need to host this API yourself, for this I recommend [Vercel](https://vercel.com).

> **Note**:
> Don't forget to replace example `YOUR-DEPLOY` parameter with real value.

## 🖥️ Hosting with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Figorkowalczyk%2Fwakatime-hourso&env=WAKATIME_API_KEY&envDescription=Environment%20Variables%20Docs&envLink=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Fwakatime-hours%23-self-hosting&project-name=portfolio&repo-name=igorkowalczyk-portfolio&demo-title=Example%20deploy&demo-description=Example%20production%20deploy%20from%20Github%20Repository&demo-url=https%3A%2F%2Fwakatime-hours.vercel.app&demo-image=https%3A%2F%2Fi.imgur.com%2FtntTLM1.png)

## 🔩 Self Hosting

1. Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `git clone https://github.com/IgorKowalczyk/wakatime-hours`
2. Run `pnpm i` to install all dependencies,
4. Create new file named `.env` Remember - the file is super secret, better to not share it.
5. In `.env` file set this values:
   - `WAKATIME_API_KEY` - Your Wakatime API Key
6. Run `pnpm run build` to build the project or `npm run dev` to run the project in development mode.

## 🖼️ Available styles

> **Note**:
> The default style is `flat`

| Style | Example | Usage |
| ----- | ---- | ---- |
| `flat` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true) | `style=flat` |
| `flat-square` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat-square&display=true) | `style=flat-square` |
| `for-the-badge` | ![](https://wakatime-hours.vercel.app/api/badge?style=for-the-badge&display=true) | `style=for-the-badge` |
| `plastic` | ![](https://wakatime-hours.vercel.app/api/badge?style=plastic&display=true) | `style=plastic` |
| `social` | ![](https://wakatime-hours.vercel.app/api/badge?style=social&display=true) | `style=social` |

> **Note**:
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> **Note**:
> The default color is `blue`

| Color | Example | Usage | Label Color | Label usage | 
| ----- | ---- | ---- | ---- |  ---- | 
| `brightgreen` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=brightgreen) | `color=brightgreen`  | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=brightgreen) | `labelColor=brightgreen` |
| `green` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=green) | `color=green` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=green) | `labelColor=green` |
| `yellow` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=yellow) | `color=yellow` |  ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=yellow) | `labelColor=yellow` |
| `yellowgreen` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=yellowgreen) | `color=yellowgreen` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=yellowgreen) | `labelColor=yellowgreen` |
| `orange` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=orange) | `color=orange` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=orange) | `labelColor=orange` |
| `red` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=red) | `color=red` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=red) | `labelColor=red` |
| `blue` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=blue) | `color=blue` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=blue) | `labelColor=blue` |
| `grey` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=grey) | `color=grey` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=grey) | `labelColor=grey` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=lightgrey) | `labelColor=lightgrey` |
| `lightgrey` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=lightgrey) | `color=lightgrey` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=lightgrey) | `labelColor=lightgrey` |
| `blueviolet` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=blueviolet) | `color=blueviolet` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=blueviolet) | `labelColor=blueviolet` |
| `ff69b4` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&color=ff69b4) | `color=ff69b4` | ![](https://wakatime-hours.vercel.app/api/badge?style=flat&display=true&labelColor=ff69b4) | `labelColor=ff69b4` |

> **Note**:
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> **Warning**:
> HEX colors should be used without `#` symbol prefix.

## 📝 Custom text

You can overwrite default `Wakatime` text with your own label.

![](https://wakatime-hours.vercel.app/api/badge?label=Your+own+label&display=true&color=blue)

> **Note**:
> Replace whitespace with `+` character in multi-word labels.

```markdown
![](https://YOUR-DEPLOY/api/badge?label=Your+own+label)
```

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/wakatime-hours/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/wakatime-hours/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md) file for details