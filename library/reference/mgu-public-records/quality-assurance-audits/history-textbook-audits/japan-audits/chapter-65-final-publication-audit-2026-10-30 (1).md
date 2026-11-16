# Chapter 65 — Consolidated Final Publication Audit

**MGU History Series — Japanese History: From Jōmon Japan to the Twenty-First Century**  
**Chapter:** 65 — Newspapers, Benshi, Early Cinema, and Mass Culture  
**Part:** IX — Constitution, Industry, and Empire  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED**, October 30, 2026, Pacific.  
**Draft checked:** `Pasted text(20261031-035532).txt` (Claude's delivered complete HTML)  
**Publication-final:** `chapter-65-newspapers-benshi-early-cinema-and-mass-culture.html`

## 1. Structural and scope compliance

The approved 35-section plan is followed exactly, with seven themed divisions and 34 historical sections plus §65.35 review. Sections are consecutive §§65.1–65.35. All major assigned areas are present: early newspapers, print capitalism, photography, modern theater, *shinpa* and *shingeki*, early films, live *benshi*, studios and film businesses, magazines, graphic satire, *rōkyoku* and sound recording, commercial advertising, audiences, celebrity, imperial representation, censorship, and synthesis. Chapter 70's later radio/department-store/mature consumer culture is reserved for later treatment. The chapter does not require indiscriminate expansion or restructuring.

- Direct historical-section narrative: **12,935 words**, excluding embedded instructional features, opening, contextual apparatus and review.
- Word counts across the seven divisions (direct narrative only): **2659, 1699, 2048, 2474, 1714, 1789, 552**. The seventh excludes §65.35 checkpoint.
- Complete HTML text including apparatus and pedagogical boxes: approximately **25,493 words** (count varies by tokenization).
- **20 integrated feature boxes**, including 3 vocabulary, 5 Primary Source Windows, 2 Historical Debates, 2 Multiple Perspectives, two Map Studies, Timeline Study, continuity/change, cause/effect, everyday-life, and comparison materials. Four tables in total, including chapter chronology, newspaper comparison, cinema timeline, and media comparison.
- Full opening, objectives, guiding questions, context, chronology, people and places, vocabulary, summary, review sets, writing assignments, research extension and reflection are present.
- No factual/direct quotation was invented in source windows; examples that have not been transcribed verbatim are explicitly marked as genre description or catalogue paraphrase.

## 2. Narrow documentary proof corrections to the publication HTML

1. **§65.17:** The first publicly exhibited Kinetoscope in Japan was at Kobe's Shinkō Club beginning **25 November 1896**. The projected Lumière Cinématographe was publicly demonstrated at **Osaka's Nanchi Enbujō on 15 February 1897**. The draft's 1896–97 range was sound, but the exact venue and projection-versus-peep-show distinctions are now explicit.
2. **§65.12:** Kawakami Otojirō's troupe performed in **Sakai in February 1891** and appeared in Tokyo at the **Nakamura-za in June 1891**. The generic draft chronology was sharpened.
3. **§65.19:** Removed **“Ueda Hōsei”**, a name not supported by the relevant benshi literature in this spelling. Retained verified pioneer **Somei Saburō**, documented at Denkikan from 1906; added appropriate context without projecting 1920s benshi conventions backward.
4. **§65.18:** Corrected *Momijigari* filming from **June to November 1899**. June 1899 relates to early domestic film exhibition, not the specific filming of *Momijigari*. The film is an important surviving 1899 work, but the 1927 surviving duplicate negative should not be confused with an 1899 original stock.
5. **§65.22:** Replaced the erroneous description of a **“Japan branch of Pathé”** with **M. Pathé Shōkai**, the Japanese enterprise led by **Umeya Shōkichi** which acquired films from France's Pathé; this was one of the four companies in Nikkatsu's 1912 merger.
6. **§65.21:** Clarified the **1908 Yoshizawa Shōten glass-stage studio on Gyōnin-zaka in Meguro** and proprietor **Kawaura Ken'ichi**; supported by Meguro City, Shochiku, and the National Film Archive.
7. **§65.3:** Specified the *Ryūkyū Shinpō*'s founding on **15 September 1893**, initially alternate-day publication and daily from 1906; verified using the newspaper's own corporate history.
8. **§65.26:** Added the independently supported **1907 Hongō-za engagement** of *rōkyoku* performer **Tōchūken Kumoemon**, and records issued from **1912**; this illustrates interaction between live and recorded performance.
9. **§65.31:** The 1903 Osaka *Jinruikan* passage now distinguishes **the groups proposed for display** (including Koreans and Chinese) from those exhibited **after diplomatic and local protest**, avoiding the assumption that every originally planned participant remained in the opened display.
10. **Three Primary Source Windows:** The general photography window now anchors to the Smithsonian's catalogued hand-colored Felice Beato **“Tea seller”** (FSA A1999.35 153 / R153). The generic cartoon window now identifies a real **1 June 1906 issue of *Tokyo Puck*** (OSU Billy Ireland, PN6790.J32 T65 v.2:no.11). The newspaper-source window specifies the original **28 January 1871 founding issue** of the *Yokohama Mainichi Shinbun* and NDL catalogue; because its complete contents were not transcribed here, text describing the genre is expressly distinguished from a specific issue transcription. No fabricated quotations, image contents or issue captions were added.

## 3. HTML and visual checks

- **74 unique IDs; 74 existing internal navigation links**, with no duplicates or broken in-document links.
- **52 opened / 52 closed** `section` tags; **115 opened / 115 closed** `div` tags. Tables and lists parse correctly.
- CSS from the Claude draft and the approved model is preserved intact as the CSS prefix; only a scoped chapter-specific responsive rule set was appended. **The entire closing sidebar/highlight JavaScript is unchanged** (exact text equivalence). `node --check` passed.
- Added four `role="region"` / `aria-label` / `tabindex="0"` horizontal scroll wrappers so that wide tables are keyboard accessible and scroll within their own boxes.
- Chromium/Playwright regression testing used HTML content and 1440, 900, 390, and 320 pixel viewports; all had **document width equal to viewport width**, **no JS page errors**. Nested tables may extend beyond their inner scrolling region as intended; the page itself does not horizontally overflow. Desktop and mobile opening-page visual screenshots inspected.

## 4. Source basis for decisive corrections

- National Film Archive of Japan, *Nihon Eiga: The History of Japanese Film*: https://www.nfaj.go.jp/english/exhibition/historyofjapanesefilm/
- NFAJ *The Meiji Period on Film*, frequently asked questions: https://meiji.filmarchives.jp/question.html
- Japan's cultural heritage film record of *Momijigari* (November 1899): https://japanheritage.jp/tokyo/heritage/movie-film-momijigari
- Kobe Planet Film Archive, Kobe 1896 screenings: https://kobe-eiga.net/cinema/about_eng/
- Ushio historical account, Osaka 15 February 1897 projection: https://www.ushio.co.jp/jp/technology/lightedge/200007/100220.html
- Japan Search / National Diet Library, Kawakami and early *shinpa*: https://jpsearch.go.jp/en/gallery/ndl-RrD43684AQB
- University research on Somei Saburō (NDL record): https://ndlsearch.ndl.go.jp/books/R000000004-I11235653
- National Diet Library, Umeya Shōkichi and M. Pathé: https://www.ndl.go.jp/portrait/e/datas/6399/
- Nikkatsu's official corporate history: https://www.nikkatsu.com/company/history.html
- Meguro City studio history: https://www.city.meguro.tokyo.jp/shougaigakushuu/bunkasports/rekishibunkazai/bunkazaimegurimeguroekisyuhen.html
- *Ryūkyū Shinpō* corporate history: https://english.ryukyushimpo.jp/ryukyu-shimpo-company-history/
- Cambridge study of Kumoemon's sound records: https://www.cambridge.org/core/journals/international-journal-of-asian-studies/article/minor-transnational-engagements-in-the-making-of-the-japanese-recording-industry/FD451123D8E544E5878DD8395124E93E
- Specialist scholarship on Osaka Jinruikan (planned versus actual display): https://www.journals.uchicago.edu/doi/10.1086/662334
- Smithsonian National Museum of Asian Art Archives, Beato *Tea seller*: https://www.si.edu/object/archives/components/sova-fsa-a1999-35-ref213
- Ohio State Billy Ireland Cartoon Library & Museum, *Tokyo Puck* volume 2 number 11: https://library.osu.edu/site/manga/2024/02/07/glimpses-from-the-vault-the-tokyo-puck-tokyo-pakku-originals-and-reprints/
- National Diet Library, founding issue of *Yokohama Mainichi Shinbun*: https://www.ndl.go.jp/portrait/pickup/030

## 5. Limitations and disposition

Historical source checking was targeted to chronology, named early practitioners, high-risk technological or publication 'firsts', editorial/publication milestones, and the primary-source windows; it **was not a line-by-line verification against archival primary sources for all manuscript statements**. There remain no known publication-critical factual or structural defects identified by this consolidated audit. The photo and cartoon source windows use verified archival catalogue identities and responsibly direct students to the actual objects; they do not reproduce an unverified image or invented text. Two map studies are analytical directions, not embedded historical maps, consistent with the chapter format.

**Disposition:** **APPROVED FOR PUBLICATION — LOCKED.** No further Claude expansion, splitting, or reorganization is required.

## 6. Reproducibility fingerprints

- Final HTML bytes (UTF-8 LF): **227,084**
- Final HTML SHA-256: **`d567e8567f76782108cf7fa302cdeee86dcbab110e8ca4fb11e25bc2247f8aeb`**
