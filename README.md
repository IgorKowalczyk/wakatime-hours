![Wakatime Hours](https://github.com/IgorKowalczyk/wakatime-hours/assets/49127376/b9480230-179b-4d24-9828-ef074a4d1d1a)

<div align="center">
 <a aria-label="Powered by" href="https://wakatime-hours.deno.dev">
  <img src="https://img.shields.io/static/v1?label=Powered%20by&message=Deno&color=blue&logo=deno">
 </a>
 <a aria-label="Badge" href="https://wakatime-hours.deno.dev">
  <img src="https://wakatime-hours.deno.dev/api/badge">
 </a>
 <a aria-label="Github License" href="https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md">
  <img src="https://img.shields.io/github/license/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=License">
 </a>
 <a aria-label="Version" href="https://github.com/igorkowalczyk/wakatime-hours/releases">
  <img src="https://img.shields.io/github/v/release/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=Version">
 </a>
 <br/>
 <br/>
 <b>Generate a badge that shows actual hours spent programming using WakaTime</b>
</div>

---

> [!IMPORTANT]
> In order to display your statistics you need to host this API yourself, for this I recommend using [Deno Deploy](https://deno.com/deploy).

> [!NOTE]
> Don't forget to replace example `YOUR-DEPLOY` parameter with real value.

## 🖥️ Hosting with Deno Deploy

1. Fork [this repository](https://github.com/IgorKowalczyk/wakatime-hours)
2. Go to [Deno Deploy](https://deno.com/deploy) and connect your GitHub account
3. Click `New Project` and select your forked repository
4. Select `main` branch
5. Add `WAKATIME_API_KEY` environment variable with your Wakatime API Key
6. Click `Link`
7. Visit `https://YOUR-DEPLOY/api/badge` in your browser

## 🔩 Self Hosting

1. Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `git clone https://github.com/IgorKowalczyk/wakatime-hours`
2. Create new file named `.env` Remember - the file is super secret, better to not share it.
3. In `.env` file set this values:
   - `WAKATIME_API_KEY` - Your Wakatime API Key
   - `PORT` - Port on which the API will be available (optional, default: `8080`)
4. Run `deno task dev` to start the project in development mode or `deno task start` to run the project in production mode.
5. Visit `http://localhost:8080` in your browser _(or `http://localhost:${PORT}` if you set custom port)_

## ▲ Hosting with Vercel

> [!WARNING]
> **This API no longer supports Vercel hosting.** But if you want to host this API on Vercel, **you can use old version of this API (`>= 2.x.x`)** which is available [here](https://github.com/IgorKowalczyk/wakatime-hours/releases/tag/v2.1.0).

> **The old version of this API is no longer supported and will not receive any updates!**

## 🗜️ API Usage

```http
GET https://YOUR-DEPLOY/api/badge?style=${style}&color=${color}&label=${label}
```

| Parameter | Type     | Description                          | Available values                                | Default value |
| :-------- | :------- | :----------------------------------- | :---------------------------------------------- | :------------ |
| `style`   | `string` | **Optional**. The style of the badge | [Available styles](#%EF%B8%8F-available-styles) | `flat`        |
| `color`   | `string` | **Optional**. The color of the badge | [Available colors](#-custom-colors)             | `blue`        |
| `label`   | `string` | **Optional**. The label of the badge | Any string                                      | `Wakatime`    |

## 🖼️ Available styles

> [!NOTE]
> The default style is `flat`

| Style           | Example                                                            | Usage                 |
| --------------- | ------------------------------------------------------------------ | --------------------- |
| `flat`          | ![](https://wakatime-hours.deno.dev/api/badge?style=flat)          | `style=flat`          |
| `flat-square`   | ![](https://wakatime-hours.deno.dev/api/badge?style=flat-square)   | `style=flat-square`   |
| `for-the-badge` | ![](https://wakatime-hours.deno.dev/api/badge?style=for-the-badge) | `style=for-the-badge` |
| `plastic`       | ![](https://wakatime-hours.deno.dev/api/badge?style=plastic)       | `style=plastic`       |
| `social`        | ![](https://wakatime-hours.deno.dev/api/badge?style=social)        | `style=social`        |

> [!NOTE]
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> [!NOTE]
> The default color is `blue`

| Color         | Example                                                                     | Usage               | Label Color                                                                      | Label usage              |
| ------------- | --------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| `brightgreen` | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=brightgreen) | `color=brightgreen` | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=brightgreen) | `labelColor=brightgreen` |
| `green`       | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=green)       | `color=green`       | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=green)       | `labelColor=green`       |
| `yellow`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=yellow)      | `color=yellow`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=yellow)      | `labelColor=yellow`      |
| `yellowgreen` | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=yellowgreen) | `color=yellowgreen` | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=yellowgreen) | `labelColor=yellowgreen` |
| `orange`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=orange)      | `color=orange`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=orange)      | `labelColor=orange`      |
| `red`         | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=red)         | `color=red`         | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=red)         | `labelColor=red`         |
| `blue`        | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=blue)        | `color=blue`        | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=blue)        | `labelColor=blue`        |
| `grey`        | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=grey)        | `color=grey`        | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=grey)        | `labelColor=grey`        |
| `lightgrey`   | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=lightgrey)   | `color=lightgrey`   | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=lightgrey)   | `labelColor=lightgrey`   |
| `blueviolet`  | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=blueviolet)  | `color=blueviolet`  | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=blueviolet)  | `labelColor=blueviolet`  |
| `ff69b4`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&color=ff69b4)      | `color=ff69b4`      | ![](https://wakatime-hours.deno.dev/api/badge?style=flat&labelColor=ff69b4)      | `labelColor=ff69b4`      |

> [!NOTE]
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> [!WARNING]
> HEX colors should be used without `#` symbol prefix.

## 📝 Custom text

You can overwrite default `Wakatime` text with your own label.

![](https://wakatime-hours.deno.dev/api/badge?label=Your+own+label&color=blue)

> [!NOTE]
> Replace whitespace with `+` character in multi-word labels.

```markdown
![Wakatime Hours](https://YOUR-DEPLOY/api/badge?label=Your+own+label)
```

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/wakatime-hours/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `https://github.com/IgorKowalczyk/wakatime-hours.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/wakatime-hours/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md) file for details
