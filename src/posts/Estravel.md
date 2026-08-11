---
title: "Estravel booking platforms"
subTitle: "Estravel web developer (NOV 2023 - JUNE 2026)"
slug: "estravel"
description: |
  * Took ownership of online B2C booking platforms, overseeing functionality and design for ~€300k in monthly sales
  * Decoupled five legacy web applications into self-contained, themeable plugins with dedicated admin interfaces for the 2024 web rebrand launch.
  * Led a company-wide migration from Thunderbird to Gmail, developed a custom Chrome email manager client

techStack: ["PHP", "Vue", "React", "WordPress", "MySQL"]
media:
  src: "/static/estravel-portfolio-animation.webm"
  alt: "Estravel web"
slugDirectory: "/posts/"
---

Estravel Group is the biggest travel agency in the Baltics with ~120 employees. [Estravel web](https://estravel.ee) is a central digital platform for all travel services. It allows making online bookings for flight tickets, accommodation and tour packages, as well as sending inquiries to travel agents.

I joined Estravel in 2023 as a web developer to update custom WordPress plugins, create new plugins, fix bugs and implement new features.

## Background

Estravel web is built in WordPress using a custom theme and plugins. The custom theme reflects Estravel brand design and provides WP custom post types for offer, blog, destination and feedback posts. When I joined a new theme was already being developed independently by Velvet. The custom plugins provide frontend search functionality to book flights, hotels and tours. The offer data comes from various providers - flight offers are loaded via Amadeus Quick Connect API, hotel offers via Anixe Resfinity and Expedia APIs, tours are loaded from Coral Travel, Novatours and TEZ Tour APIs.

The provider data passes through a PHP Symfony gateway for normalizing the data format across different providers. Hotel data is normalized from JSON, HTML and XML by a Python script. Symfony also caches processed data to quickly show offers (last minute offers) without requiring a full API request, but due to constantly changing prices these offers are only available for inquiry.

After COVID, Estravel got back on its feet and started working through a backlog of accumulated web development tasks. While Velvet was developing the new theme, I began updating the plugins to make them compatible with the new design. The table below lists each project alongside its tech stack and even foreshadows 3 future projects:

<div class="table-scroll content-bleed">
<table class="border-collapse">
    <thead class="font-semibold text-neutral-500">
        <tr>
            <td class="px-3 py-4">PROJECT</td>
            <td class="px-3 py-4">FRONTEND</td>
            <td class="px-3 py-4">BACKEND</td>
            <td class="px-3 py-4">API</td>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/flights-en-home-mobile.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">FLIGHTS</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">VUE</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">SYMFONY</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">AMADEUS QC</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/hotels-en-home-mobile.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">HOTELS</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">VUE</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">SYMFONY</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">RESFINITY, EXPEDIA</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/tours-en-home-mobile-edited.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">TOURS</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">REACT</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">SYMFONY</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">CORAL, NOVA, TEZ</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/tours-lmt-en-home-mobile-fullname.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">TOURS LMO</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">REACT</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">SYMFONY</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">TOURS CACHE</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/hotellinfo.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">HOTEL INFO</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">PHP</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">FASTAPI</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">TOUR & HOTEL DISTRIBUTORS</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/consultant.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">CONSULTANTS</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">VUE</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">JAVA</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">INTRA</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/gadventures-en-offer-mobile.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">🌱 G&nbsp;ADVENTURES</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">VUE</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">FASTAPI</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">G&nbsp;ADVENTURES</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/reisikaubad-payment.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">🌱 REISIKAUBAD.EE GIFTCARDS</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">WP</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">JAVA</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">INTRA</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/mail-en.png">
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">🌱 MAIL</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">VUE</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">JAVA</td>
            <td class="px-3! py-4! font-bold text-lg md:text-[2rem]">INTRA, GOOGLE</td>
        </tr>
    </tbody>
</table>
</div>

## Updating plugins for new web

What were called plugins were not really plugins at all. They were bundles of code embedded in the WordPress theme and exposed through shortcodes, tightly coupled to the theme and to each other. This spaghetti made them impossible to modify in isolation, so each had to be rebuilt from scratch as a genuinely self-contained plugin. In the old setup none of a plugin's concerns were its own:

- Styling was not encapsulated; plugin CSS lived in the theme's style files
- Configuration was hardcoded into theme files rather than the plugin itself
- Plugins relied on globally registered automounting Vue components
- Translations were lumped together under a single shared estravel domain instead of one per plugin

Tailwind was chosen to style the new plugins for a few reasons: it keeps plugin styles isolated so a theme cannot easily override them, it prevents plugin styles from leaking into the global scope (via postcss-prefixwrap), and it allows theming atomic color classes via CSS custom properties. Theming was required to create preset styles of the same plugin for multiple domains, like the flights plugin on estravel.ee and [sky24.ee](https://sky24.ee), or the tours plugin on estravel.ee and [wris.ee](https://wris.ee). In terms of design, Velvet designed on-brand search forms in Figma that were ready for implementation. The new search forms used a white background in order to avoid contrast issues due to the use of background images.

Configuration was moved inside the plugin code and exposed to site admins as a WordPress settings page. The settings page is generated via Carbon Fields PHP library which allows easily declaring setting values and handles field registration, validation and save callbacks automatically. Carbon Fields also provides advanced setting options like tab layout and repeater fields.

Each plugin now ships its own translations as `.pot`/`.po`/`.mo` files. This allows handing translation files to [estravel.lv](https://celojumi.estravel.lv/lv/) and estravel.lt sister companies for them to create their own native translations and start using the booking platforms.

The plugin TypeScript was also modernized to lean on newer web platform features. The payment-option accordion, previously animated with jQuery, now uses native `<details>` and `<summary>` elements. Modals moved to the native `<dialog>` element, whose `top-layer` rendering removes the old `z-index` workarounds. Search requests now use `AbortController` to cancel an in-flight request when the user starts a new search, eliminating a race condition.

The new website launched on 2024 November with all 6 custom plugins migrating over smoothly.

<div class="img-grid">
  <img src="/static/img/posts/estravel/flights-en-home-mobile.png" alt="Flights search" />
  <img src="/static/img/posts/estravel/hotels-en-home-mobile.png" alt="Accommodation search" />
  <img src="/static/img/posts/estravel/tours-en-home-mobile-edited.png" alt="Package tours search" />
  <img src="/static/img/posts/estravel/tours-lmt-en-home-mobile-fullname.png" alt="Last minute offers" />
  <img src="/static/img/posts/estravel/hotellinfo.png" alt="Hotel info" />
  <img src="/static/img/posts/estravel/consultant.png" alt="Consultant search" />
</div>

Velvet later won [bronze Golden Egg 2025 award](https://kuldmuna.ee/arhiiv/index.php/work/nominee/estravel-10451) for the excellent design.

## Post launch web improvements

After launch I solved previously backlogged bugs like faulty space encoding in URLs, faulty autocomplete input, date shifting due to automatic timezone conversions, race conditions and inaccurate result filtering. I implemented new plugin features like streamlining the booking process, adding streamed partial result loading, client card validation, bonus-point-based payment and a map view for hotel selection. On the theme side I ended up managing the new theme and even ported it over to the [estravelgroup.com](https://estravelgroup.com) site in a simplified form.

I added a gift card payment option to the [reisikaubad.ee](https://reisikaubad.ee) e-commerce store. The store already sold Estravel gift cards, but the cards could not be redeemed for store purchases. While WooCommerce has concepts for coupons and cart fees, there is no native solution for a gift card, as gift card redemption has special requirements:

- Must allow driving the cart total negative
- Cannot be added to carts that purchase gift cards
- Must store the gift card data for use at checkout

The cleanest solution was to create a hidden virtual product that stores metadata about the attached gift card code, serial and amount. This makes the applied gift card show up as a product in the cart/order.

I also integrated G&nbsp;Adventures escorted tour offers. Since G&nbsp;Adventures tour data seldom changes, the best option was to cache all ~1200 G&nbsp;Adventures offers. The cached data is served on the search results page, while fresh data is retrieved when opening an offer's details page. The cache is composed from 3 G&nbsp;Adventures REST API endpoints:

1. `tour_dossiers/` - metadata for all tours, paginated to 100 tours
2. `tour_dossiers/{tourId}` - detailed information like geography, images and itinerary about the tour
3. `tour_dossiers/{tourId}/departures` - available departure dates and price, paginated to 100 departures

A Python script, running on a daily CRON, was made to fetch G&nbsp;Adventures offers. With 20 workers the import process takes about 4 minutes. Because estravel.ee has a global 1 minute Apache timeout limit, the import script was moved to a FastAPI endpoint that finishes with a POST request back to estravel.ee to save data to cache.

The frontend is a simple Vue app that binds search form filters with cached tour data and renders freshly fetched API offer data. The offer ends with an inquiry: a Gravity Forms form inside an iframe inside a modal. The iframe dynamically loads the server-rendered Gravity Forms form with its 400kB of anti-spam reCAPTCHA script, and an iframe-resizer script renders the iframe responsively inside the modal.

<div class="img-grid">
  <img src="/static/img/posts/estravel/estravelgroup.png" alt="Estravel Group corporate site" />
  <img src="/static/img/posts/estravel/reisikaubad-payment-giftcard.png" alt="Giftcard redemption" />
  <img src="/static/img/posts/estravel/gadventures-square-offer.png" alt="G Adventures tour offer" />
</div>

## Gmail migration

Client-consultant email communication is managed via an internal TORU backend application. TORU allows searching for emails, assigning them to consultants, leaving notes, sending reminders, tracking email status, managing email templates and signatures, and integrating with CRM and sales databases. Travel consultants previously used the Thunderbird email client, but Thunderbird is not part of the Google Suite of programmes used across Estravel. It was decided to migrate to Gmail to share the same app ecosystem and make use of the generative AI functionality built into Gmail for creating hotel comparison analyses, handling translation and composing travel plans.

I created a Chrome browser extension in order to tie Gmail with TORU backend functionality. The extension was developed in Vue, because Vue has a web extension development [starter template](https://github.com/mubaidr/vite-vue3-browser-extension-v3). The extension injects data into the email content and metadata. For example, channel name and thread ID are saved in metadata, while signatures and templates are added to the email body. It also allows customizing Gmail, like changing the ordering of thread messages or the placement of attachments. It even fixes some bugs related to replies becoming unreadable, Gmail search not working ("@" navigation) and selecting the correct send-as identity when replying to a sent email (like a payment confirmation followed by a booking confirmation).

<div class="img-grid">
  <img src="/static/img/posts/estravel/toru-cache-cropped.png" alt="TORU registry" />
  <img src="/static/img/posts/estravel/toru-reply.png" alt="Reply with signature and template insertion" />
  <img src="/static/img/posts/estravel/toru-details.png" alt="Email details and management" />
</div>

It is deployed to all Estravel EE, LV and LT employees via Windows Domain Policy and the `ExtensionInstallForcelist` registry setting using a locally signed `.crx` zipped extension file. The goal of promoting AI usage was achieved via [tehisintellekt.ee](https://tehisintellekt.ee) Gemini workshops and sharing AI usage examples.

## Dubai evacuation

On 28.02.2026 a military conflict began between Israel, the US and Iran. As a result normal air traffic closed and many people were left stranded in a war zone. The Ministry of Foreign Affairs partnered with Estravel to organize FlyDubai evacuation flights from Dubai to Riga. Three charter flights were organized by Estravel on consecutive days during the 06.03-08.03.2026 weekend.

I handled ad-hoc IT solutions for the Estravel crisis response team. That meant submission form creation and Google Sheets setup. Google Sheets was an obvious choice, as it let the whole 12-person team work on the same data live. The submission form was created with Gravity Forms, because unlike Google Forms it supported dynamic passenger-count submission via conditional field rendering. The intake ran on a Gravity Forms web form that fed submissions straight into Google Sheets through a connector plugin, where formulas split passengers into travel agent, airline and bus views. Multiple passengers could register in one submission as a group, but the data was normalized to one person per row. This normalization allowed the airline and bus passenger lists to be automated based on a ticket-sent checkbox, which was particularly important for FlyDubai, which demanded hourly passenger updates.


<div class="img-grid">
  <img src="/static/img/posts/estravel/evac-registration-cropped.png" alt="Evacuation registration info" />
  <img src="/static/img/posts/estravel/evac-form.png" alt="Registration form" />
  <img src="/static/img/posts/estravel/DBX-RIX-2026-03-08.png" alt="FlightRadar24" />
</div>

In the end everything worked smoothly - the website did not crash due to increased load, customers were contacted promptly, payment arrived and internal communication worked. In total Estravel organized the evacuation of 435 passengers from Dubai to Riga with 161 reaching Tallinn via bus transfer. Tiina Nirk, Director General of the Consular Department of the MFA, praised us directly for our effort, saying "Our cooperation with Estravel was excellent and highly professional. They built a robust ticket sales environment in half a day." You can read more on [estravel.ee blog post](https://www.estravel.ee/blog/ule-400-inimese-72-tunni-jooksul-dubaist-koju/).

## Final words

I joined Estravel as a web developer to maintain a handful of aging WordPress plugins, and over time proved capable of taking on larger fullstack work. In June 2026 my title was changed to Fullstack Developer and I moved on to build complete booking systems and entire sites. [Continue reading: Estravel Metasearch →](/posts/estravel-metasearch)


<!--
<figure>
    <img src="/static/img/posts/estravel/pixel-ee-feedback.png" alt="Feedback" />
    <figcaption>Allikas - https://pixel.ee/teema/uus-estravel/</figcaption>
</figure>

<pre class="content-bleed">
PROJECT                   BACKEND          FRONTEND              API
FLIGHTS                   SYMFONY          VUE                   AMADEUS CQ
HOTELS                    SYMFONY          VUE                   RESFINITY
PACKAGE TOURS & LMT       SYMFONY, PYTHON  REACT                 ANIXE, EXPEDIA
CONSULTANT SEARCH         JAVA             VUE                   INTRA
G ADVENTURES              .NET             VUE                   G ADVENTURES
HOTEL INFO                SYMFONY, PYTHON  HTMX                  NOVATOURS, CORAL, TEZ
GMAIL EXTENSION           JAVA             VUE                   INTRA, GOOGLE
WORDPRESS THEME           ACF              PHP                   EDITORS
GIFTCARDS                 WOOCOMMERCE      PHP                   INTRA
</pre>
