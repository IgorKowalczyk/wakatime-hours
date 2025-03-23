![Wakatime Hours](https://github.com/IgorKowalczyk/wakatime-hours/assets/49127376/d47625a9-5232-444f-9279-ce30aa69b5ca)

<div align="center">
 <a aria-label="Badge" href="https://wakatime.igorkowalczyk.dev">
  <img src="https://wakatime.igorkowalczyk.dev/api/badge">
 </a>
 <a aria-label="Github License" href="https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md">
  <img src="https://img.shields.io/github/license/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=License">
 </a>
 <a aria-label="Version" href="https://github.com/igorkowalczyk/wakatime-hours/releases">
  <img src="https://img.shields.io/github/v/release/igorkowalczyk/wakatime-hours?color=blue&logo=github&label=Version">
 </a>
</div>

---

> [!IMPORTANT]
> In order to display your statistics you need to host this API yourself, for this I recommend using [Cloudflare Workers](#️-hosting-with-cloudflare-workers)

## 🌐 Hosting with Cloudflare Workers

1. Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `git clone https://github.com/IgorKowalczyk/wakatime-hours`
2. Install dependencies `pnpm install`
3. Edit `wrangler.jsonc` file and set your `name`, `routes` or other settings if needed
4. Run `wrangler dev` to start the project in development mode or `wrangler deploy` to deploy the project to Cloudflare Workers
5. Run `pnpm wrangler secret put WAKATIME_API_KEY` and paste your Wakatime API Key, you can get it [here](#-getting-wakatime-api-key)
6. Visit `https://YOUR-DEPLOY/api/badge` in your browser

> [!NOTE]
> If you wish to host this API on a different platform, refer to the [Hono documentation](https://hono.dev/docs/getting-started/basic) for deployment instructions. You may need to modify the code to work with your hosting provider.

## 🔩 Local development

1. Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `git clone https://github.com/IgorKowalczyk/wakatime-hours`
2. Install dependencies `pnpm install`
3. Create new file named `.dev.vars`. Remember - the file is super secret, better to not share it!
4. In `.dev.vars` file set this values (`.env` file syntax):
   - `WAKATIME_API_KEY` - Your Wakatime API Key, you can get it [here](#-getting-wakatime-api-key)
5. Run `pnpm dev` to start the project in development mode
6. Visit `http://localhost:8787/api/badge` in your browser

## 🚀 Getting Wakatime API key

1. Go to [Wakatime](https://wakatime.com) and login to your account
2. Go to [API Keys](https://wakatime.com/settings/api-key) page and copy your API Key. This key is super secret, better to not share it.
3. Paste your API Key to `.dev.vars` file or add it as environment variable on your hosting

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

| Style           | Example                                                               | Usage                 |
| --------------- | --------------------------------------------------------------------- | --------------------- |
| `flat`          | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat)          | `style=flat`          |
| `flat-square`   | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat-square)   | `style=flat-square`   |
| `for-the-badge` | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=for-the-badge) | `style=for-the-badge` |
| `plastic`       | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=plastic)       | `style=plastic`       |
| `social`        | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=social)        | `style=social`        |

> [!NOTE]
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> [!NOTE]
> The default color is `blue`

| Color         | Example                                                                        | Usage               | Label Color                                                                         | Label usage              |
| ------------- | ------------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------- | ------------------------ |
| `brightgreen` | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=brightgreen) | `color=brightgreen` | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=brightgreen) | `labelColor=brightgreen` |
| `green`       | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=green)       | `color=green`       | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=green)       | `labelColor=green`       |
| `yellow`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=yellow)      | `color=yellow`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=yellow)      | `labelColor=yellow`      |
| `yellowgreen` | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=yellowgreen) | `color=yellowgreen` | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=yellowgreen) | `labelColor=yellowgreen` |
| `orange`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=orange)      | `color=orange`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=orange)      | `labelColor=orange`      |
| `red`         | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=red)         | `color=red`         | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=red)         | `labelColor=red`         |
| `blue`        | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=blue)        | `color=blue`        | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=blue)        | `labelColor=blue`        |
| `grey`        | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=grey)        | `color=grey`        | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=grey)        | `labelColor=grey`        |
| `lightgrey`   | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=lightgrey)   | `color=lightgrey`   | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=lightgrey)   | `labelColor=lightgrey`   |
| `blueviolet`  | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=blueviolet)  | `color=blueviolet`  | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=blueviolet)  | `labelColor=blueviolet`  |
| `ff69b4`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&color=ff69b4)      | `color=ff69b4`      | ![](https://wakatime.igorkowalczyk.dev/api/badge?style=flat&labelColor=ff69b4)      | `labelColor=ff69b4`      |

> [!NOTE]
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> [!WARNING]
> HEX colors should be used without `#` symbol prefix.

## 📝 Custom text

You can overwrite default `Wakatime` text with your own label.

![](https://wakatime.igorkowalczyk.dev/api/badge?label=Your+own+label&color=blue)

> [!NOTE]
> Replace whitespace with `+` character in multi-word labels.

```markdown
![Wakatime Hours](https://YOUR-DEPLOY/api/badge?label=Your+own+label)
```

## 📊 Getting Wakatime API Key

1. Go to [Wakatime](https://wakatime.com) and login to your account
2. Go to [API Keys](https://wakatime.com/settings/api-key) page and copy your API Key
3. Paste your API Key to `.env` file or add it as environment variable on your hosting
4. Restart your API if needed

> [!IMPORTANT]
> Wakatime API Key is super secret, better to not share it. If you share it, anyone can use your API Key to get or modify your statistics.

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/wakatime-hours/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/wakatime-hours) `https://github.com/IgorKowalczyk/wakatime-hours.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/wakatime-hours/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/wakatime-hours/blob/main/license.md) file for details
