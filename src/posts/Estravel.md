---
title: "Estravel booking platforms"
subTitle: "Estravel Fullstack developer (NOV 2023 - present)"
slug: "estravel"
description: |
    * Built internal E2E offer composition workspace for consultants integrating Gmail, supplier APIs and AI agents
    * Took ownership of online B2C booking platforms, overseeing functionality and design for ~€300k in monthly sales
    * Decoupled five legacy web applications into self-contained, themable plugins with dedicated admin interfaces
    * Built product (Dreamlake, G Adventures) resale flows and internal AI tooling integrations
    * Led company-wide migration from Thunderbird to Gmail, developed custom Chrome email manager client

techStack: ["PHP", "Laravel", "Vue", "React", "FastAPI", "WordPress", "MySQL"]
media:
  src: "/static/estravel-portfolio-animation.webm"
  alt: "Estravel web"
slugDirectory: "/posts/"
---
Estravel Group is the biggest travel agency in the Baltics. Estravel web platform is a central hub for discovering flight tickets, accommodation and travel packages for both online booking and manual inquiries via travel agents. It serves as the digital entry point to all Estravel’s travel services.

Introduction

<table class="content-bleed border-collapse">
    <thead class="font-semibold text-neutral-500">
        <tr>
            <td class="px-3 py-4">PROJECT</td>
            <td class="px-3 py-4">FOR</td>
            <td class="px-3 py-4">FRONTEND</td>
            <td class="px-3 py-4">BACKEND</td>
            <td class="px-3 py-4">API</td>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-neutral-100" data-tooltip-content="/static/img/posts/estravel/theme-en.png">
            <td class="px-3 py-5 font-bold text-[2rem]">SITE THEME</td>
            <td class="px-3 py-5 font-bold text-[2rem]">EDITORS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">REACT</td>
            <td class="px-3 py-5 font-bold text-[2rem]">ACF</td>
            <td class="px-3 py-5 font-bold text-[2rem]">-</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/flights-en-home-mobile.png">
            <td class="px-3 py-5 font-bold text-[2rem]">FLIGHTS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (ALL)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">VUE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">SYMFONY</td>
            <td class="px-3 py-5 font-bold text-[2rem]">AMADEUS CQ</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/hotels-en-home-mobile.png">
            <td class="px-3 py-5 font-bold text-[2rem]">HOTELS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (ALL)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">VUE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">SYMFONY</td>
            <td class="px-3 py-5 font-bold text-[2rem]">RESFINITY</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/tours-en-home-mobile-edited.png">
            <td class="px-3 py-5 font-bold text-[2rem]">TOURS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (B2C)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">REACT</td>
            <td class="px-3 py-5 font-bold text-[2rem]">SYMFONY</td>
            <td class="px-3 py-5 font-bold text-[2rem]">ANIXE, EXPEDIA</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/tours-lmt-en-home-mobile-fullname.png">
            <td class="px-3 py-5 font-bold text-[2rem]">TOURS LMO</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (B2C)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">REACT</td>
            <td class="px-3 py-5 font-bold text-[2rem]">SYMFONY</td>
            <td class="px-3 py-5 font-bold text-[2rem]">TOURS CACHE</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/mail-en.png">
            <td class="px-3 py-5 font-bold text-[2rem]">MAIL</td>
            <td class="px-3 py-5 font-bold text-[2rem]">STAFF</td>
            <td class="px-3 py-5 font-bold text-[2rem]">VUE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">JAVA</td>
            <td class="px-3 py-5 font-bold text-[2rem]">INTRA, GOOGLE</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/gadventures-en-offer-mobile.png">
            <td class="px-3 py-5 font-bold text-[2rem]">G ADVENTURES</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (B2C)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">VUE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">FASTAPI</td>
            <td class="px-3 py-5 font-bold text-[2rem]">G ADVENTURES</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/hotellinfo.png">
            <td class="px-3 py-5 font-bold text-[2rem]">HOTEL INFO</td>
            <td class="px-3 py-5 font-bold text-[2rem]">STAFF & CLIENTS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">PHP</td>
            <td class="px-3 py-5 font-bold text-[2rem]">FASTAPI</td>
            <td class="px-3 py-5 font-bold text-[2rem]">DISTRIBUTORS</td>
        </tr>
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/reisikaubad-payment.png">
            <td class="px-3 py-5 font-bold text-[2rem]">GIFTCARDS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">REISIKAUBAD.EE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">WP</td>
            <td class="px-3 py-5 font-bold text-[2rem]">JAVA</td>
            <td class="px-3 py-5 font-bold text-[2rem]">INTRA</td>
        </tr>
        <!--
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/ai-validator.png">
            <td class="px-3 py-5 font-bold text-[2rem]">OFFER VALIDATOR</td>
            <td class="px-3 py-5 font-bold text-[2rem]">STAFF</td>
            <td class="px-3 py-5 font-bold text-[2rem]">REACT</td>
            <td class="px-3 py-5 font-bold text-[2rem]">FASTAPI</td>
            <td class="px-3 py-5 font-bold text-[2rem]">GEMINI</td>
        </tr>
        -->
        <tr class="hover:bg-neutral-100 border-t border-neutral-300" data-tooltip-content="/static/img/posts/estravel/consultant.png">
            <td class="px-3 py-5 font-bold text-[2rem]">CONSULTANTS</td>
            <td class="px-3 py-5 font-bold text-[2rem]">CLIENTS (ALL)</td>
            <td class="px-3 py-5 font-bold text-[2rem]">VUE</td>
            <td class="px-3 py-5 font-bold text-[2rem]">JAVA</td>
            <td class="px-3 py-5 font-bold text-[2rem]">INTRA</td>
        </tr>
    </tbody>
</table>


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

### Background


### What I did


On 28.02.2026 military conflict began between Israel, the US, and Iran. The Ministry of Foreign Affairs partnered with Estravel to organize FlyDubai evacuation flights from Dubai to Riga. I handled ad-hoc IT solutions for Estravel crisis respose team. That included web form creation, Google Sheets integration, creating 3 passenger tracking views (travel agent, flight, bus) and a lot of data correction.

![FlightRadar24](/static/img/posts/estravel/DBX-RIX-2026-03-08.png)

### Final words

