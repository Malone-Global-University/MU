# ============================================================
# MGU Newspaper Folder + Index Builder
# Root: C:\MGU\news
# Purpose:
#   1. Create missing newspaper section folders.
#   2. Create missing index.html files.
#   3. Skip existing index.html files by default.
# ============================================================

$NewsRoot = "C:\MGU\news"
$OverwriteExisting = $false
$Today = Get-Date -Format "MM-dd-yyyy"

# ------------------------------------------------------------
# FULL NEWSPAPER SECTION STRUCTURE
# ------------------------------------------------------------

$Folders = @(
    "africa",
    "africa\africa-explainers",
    "africa\business-and-development",
    "africa\culture-and-arts",
    "africa\diaspora-and-global-connections",
    "africa\health-science-and-enviroment",
    "africa\society-and-community",

    "campus",
    "campus\academics-and-learning",
    "campus\campus-history-and-resources",
    "campus\campus-voices",
    "campus\events-and-calndar",
    "campus\services-and-resources",
    "campus\student-life",

    "culture",
    "culture\culture-explainers",
    "culture\food-and-everyday-life",
    "culture\language-and-belief",
    "culture\media-and-digital-culture",
    "culture\music-andsound",
    "culture\style-and-design",

    "diaspora",
    "diaspora\black-global-life",
    "diaspora\diaspora-busines-and-education",
    "diaspora\diaspora-culture",
    "diaspora\diaspora-expainers",
    "diaspora\family-remittances-and-home",
    "diaspora\migration-and-belonging",

    "digest",
    "digest\digest-archive",
    "digest\editor-picks",
    "digest\quick-explainers",
    "digest\reasding-lists",
    "digest\trimelines-and-headlines",
    "digest\weekly-roundup",

    "economy",
    "economy\business-and-industry",
    "economy\economic-literacy",
    "economy\inflation-and-prices",
    "economy\jobs-and-labor",
    "economy\markets-and-money",
    "economy\public-finance",
    "economy\trade-and-global-economy",

    "features",
    "features\essays-and-explainers",
    "features\explainers-and-guides",
    "features\photo-and-multimedia",
    "features\profiles-and-interviews",
    "features\series-and-packages",
    "features\special-projects-archive",

    "forums",
    "forums\civic-center",
    "forums\commons",

    "heritage",
    "heritage\archives-and-documents",
    "heritage\biography-and-profiles",
    "heritage\genealogy-and-oral-history",
    "heritage\heritage-and-memory",
    "heritage\places-monuments-and-museums",
    "heritage\timelines-and-anniversaries",

    "investigative-reports",
    "investigative-reports\data-and-patterns",
    "investigative-reports\documents-and-records",
    "investigative-reports\follow-ups-and-corrections",
    "investigative-reports\investigative-methods",
    "investigative-reports\public-money-and-contracts",
    "investigative-reports\safety-rights-and-risk",

    "mgu-report",

    "north-america",
    "north-america\canada",
    "north-america\coverage-standards",
    "north-america\mexico",
    "north-america\migration-trade-culture-and-community-affairs",
    "north-america\regional-communities",
    "north-america\regional-politics-economics-and-society",

    "perspectives",
    "perspectives\columns",
    "perspectives\editorials",
    "perspectives\guest-essays",
    "perspectives\letters",
    "perspectives\media-criticism",

    "politics",
    "politics\civic-education",
    "politics\elections",
    "politics\law-and-government",
    "politics\national",
    "politics\public-policy",
    "politics\state-and-local",
    "politics\world",

    "science",
    "science\earth-climate-and-environment",
    "science\health-and-biology",
    "science\physics-chemistry-and-math",
    "science\scientific-literacy",
    "science\space-and-astronomy",
    "science\technology-and-engineering",

    "us",
    "us\communities-and-civil-society",
    "us\education-and-public-services",
    "us\law-and-courts",
    "us\states-and-regions",
    "us\us-economy-and-work",
    "us\us-explainers",

    "wellness",
    "wellness\fitness-and-movement",
    "wellness\nutrition-and-food",
    "wellness\public-health-and-safety",
    "wellness\relationships-and-community",
    "wellness\sleep-and-recovery",
    "wellness\wellness-guides",

    "world",
    "world\climate-health-and-science",
    "world\conflict-peace-and-security",
    "world\diplomacy-and-global-institutions",
    "world\global-economy-and-development",
    "world\migration-and-human-rights",
    "world\world-explainers"
)

# ------------------------------------------------------------
# TITLE HELPER
# Converts folder slugs into readable titles.
# ------------------------------------------------------------

function Convert-SlugToTitle {
    param([string]$Slug)

    $SpecialCases = @{
        "us" = "U.S."
        "mgu" = "MGU"
        "mgu-report" = "MGU Report"

        "africa-explainers" = "Africa Explainers"
        "business-and-development" = "Business and Development"
        "culture-and-arts" = "Culture and Arts"
        "diaspora-and-global-connections" = "Diaspora and Global Connections"
        "health-science-and-enviroment" = "Health, Science, and Environment"
        "society-and-community" = "Society and Community"

        "academics-and-learning" = "Academics and Learning"
        "campus-history-and-resources" = "Campus History and Resources"
        "campus-voices" = "Campus Voices"
        "events-and-calndar" = "Events and Calendar"
        "services-and-resources" = "Services and Resources"
        "student-life" = "Student Life"

        "culture-explainers" = "Culture Explainers"
        "food-and-everyday-life" = "Food and Everyday Life"
        "language-and-belief" = "Language and Belief"
        "media-and-digital-culture" = "Media and Digital Culture"
        "music-andsound" = "Music and Sound"
        "style-and-design" = "Style and Design"

        "black-global-life" = "Black Global Life"
        "diaspora-busines-and-education" = "Diaspora Business and Education"
        "diaspora-culture" = "Diaspora Culture"
        "diaspora-expainers" = "Diaspora Explainers"
        "family-remittances-and-home" = "Family, Remittances, and Home"
        "migration-and-belonging" = "Migration and Belonging"

        "digest-archive" = "Digest Archive"
        "editor-picks" = "Editor Picks"
        "quick-explainers" = "Quick Explainers"
        "reasding-lists" = "Reading Lists"
        "trimelines-and-headlines" = "Timelines and Headlines"
        "weekly-roundup" = "Weekly Roundup"

        "business-and-industry" = "Business and Industry"
        "economic-literacy" = "Economic Literacy"
        "inflation-and-prices" = "Inflation and Prices"
        "jobs-and-labor" = "Jobs and Labor"
        "markets-and-money" = "Markets and Money"
        "public-finance" = "Public Finance"
        "trade-and-global-economy" = "Trade and Global Economy"

        "essays-and-explainers" = "Essays and Explainers"
        "explainers-and-guides" = "Explainers and Guides"
        "photo-and-multimedia" = "Photo and Multimedia"
        "profiles-and-interviews" = "Profiles and Interviews"
        "series-and-packages" = "Series and Packages"
        "special-projects-archive" = "Special Projects Archive"

        "civic-center" = "Civic Center"

        "archives-and-documents" = "Archives and Documents"
        "biography-and-profiles" = "Biography and Profiles"
        "genealogy-and-oral-history" = "Genealogy and Oral History"
        "heritage-and-memory" = "Heritage and Memory"
        "places-monuments-and-museums" = "Places, Monuments, and Museums"
        "timelines-and-anniversaries" = "Timelines and Anniversaries"

        "data-and-patterns" = "Data and Patterns"
        "documents-and-records" = "Documents and Records"
        "follow-ups-and-corrections" = "Follow-Ups and Corrections"
        "investigative-methods" = "Investigative Methods"
        "public-money-and-contracts" = "Public Money and Contracts"
        "safety-rights-and-risk" = "Safety, Rights, and Risk"

        "north-america" = "North America"
        "coverage-standards" = "Coverage Standards"
        "migration-trade-culture-and-community-affairs" = "Migration, Trade, Culture, and Community Affairs"
        "regional-communities" = "Regional Communities"
        "regional-politics-economics-and-society" = "Regional Politics, Economics, and Society"

        "guest-essays" = "Guest Essays"
        "media-criticism" = "Media Criticism"

        "civic-education" = "Civic Education"
        "law-and-government" = "Law and Government"
        "public-policy" = "Public Policy"
        "state-and-local" = "State and Local"

        "earth-climate-and-environment" = "Earth, Climate, and Environment"
        "health-and-biology" = "Health and Biology"
        "physics-chemistry-and-math" = "Physics, Chemistry, and Math"
        "scientific-literacy" = "Scientific Literacy"
        "space-and-astronomy" = "Space and Astronomy"
        "technology-and-engineering" = "Technology and Engineering"

        "communities-and-civil-society" = "Communities and Civil Society"
        "education-and-public-services" = "Education and Public Services"
        "law-and-courts" = "Law and Courts"
        "states-and-regions" = "States and Regions"
        "us-economy-and-work" = "U.S. Economy and Work"
        "us-explainers" = "U.S. Explainers"

        "fitness-and-movement" = "Fitness and Movement"
        "nutrition-and-food" = "Nutrition and Food"
        "public-health-and-safety" = "Public Health and Safety"
        "relationships-and-community" = "Relationships and Community"
        "sleep-and-recovery" = "Sleep and Recovery"
        "wellness-guides" = "Wellness Guides"

        "climate-health-and-science" = "Climate, Health, and Science"
        "conflict-peace-and-security" = "Conflict, Peace, and Security"
        "diplomacy-and-global-institutions" = "Diplomacy and Global Institutions"
        "global-economy-and-development" = "Global Economy and Development"
        "migration-and-human-rights" = "Migration and Human Rights"
        "world-explainers" = "World Explainers"
    }

    if ($SpecialCases.ContainsKey($Slug)) {
        return $SpecialCases[$Slug]
    }

    return ($Slug -split "-" | ForEach-Object {
        if ($_.Length -gt 0) {
            $_.Substring(0,1).ToUpper() + $_.Substring(1)
        }
    }) -join " "
}

# ------------------------------------------------------------
# DESCRIPTION HELPER
# ------------------------------------------------------------

function Get-SectionDescription {
    param(
        [string]$FolderPath,
        [string]$SectionTitle
    )

    $Descriptions = @{
        "africa" = "Coverage of political, cultural, economic, scientific, and civic developments across the African continent."
        "campus" = "News and updates from Malone Global University, including programs, academic activity, student life, and institutional development."
        "culture" = "Reporting and commentary on arts, language, media, identity, public memory, education, and cultural life."
        "diaspora" = "Coverage of African-descended communities across the world, with attention to politics, migration, culture, economics, and historical memory."
        "digest" = "Brief summaries, roundups, updates, and recurring news notes from across The Malone Panther."
        "economy" = "Coverage of markets, labor, business, development, trade, household finance, public budgets, and economic policy."
        "features" = "Longer human-interest stories, profiles, explainers, interviews, and narrative journalism."
        "forums" = "Public discussion spaces, civic reflections, community conversations, and reader-centered engagement."
        "heritage" = "Coverage of history, ancestry, legacy, memory, archives, commemorations, and cultural inheritance."
        "investigative-reports" = "Deeper reporting focused on accountability, public records, systems, institutions, and unresolved civic questions."
        "mgu-report" = "Institutional reporting from Malone Global University, including updates, milestones, initiatives, and internal public communications."
        "north-america" = "Coverage of Canada, the United States, Mexico, the Caribbean, and regional North American affairs."
        "perspectives" = "Opinion, editorial, analysis, commentary, guest writing, letters, columns, and media criticism."
        "politics" = "Coverage of government, elections, civic education, law, public policy, political institutions, and public power."
        "science" = "Science, technology, health, environment, space, engineering, and scientific literacy coverage."
        "us" = "Coverage of United States news, institutions, communities, politics, economy, law, and society."
        "wellness" = "Coverage of health, personal development, public wellness, mental fitness, education, family life, and community care."
        "world" = "Coverage of global affairs, international institutions, diplomacy, conflict, development, culture, and public life."
    }

    if ($Descriptions.ContainsKey($FolderPath)) {
        return $Descriptions[$FolderPath]
    }

    return "Articles, updates, analysis, and reference coverage from the $SectionTitle section of The Malone Panther."
}

# ------------------------------------------------------------
# INDEX TEMPLATE BUILDER
# ------------------------------------------------------------

function New-NewsIndexHtml {
    param(
        [string]$SectionTitle,
        [string]$Description
    )

@"
<!DOCTYPE html>
<html lang="en">

<!-- ========== HEAD ========== -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="$Description">
  <title>$SectionTitle | The Malone Panther | Malone Global University</title>
  <link rel="icon" href="/image/global/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/component/news.css">
</head>

<!-- ========== BODY ========== -->
<body id="top" data-uploaded="$Today" data-updated="$Today">

<!-- ========== HEADER ========== -->
<div id="header-placeholder"></div>
<script>
fetch('/component/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const script = document.createElement('script');
    script.src = '/component/main.js';
    document.body.appendChild(script);
  });
</script>

<!-- ========== SECTION HERO ========== -->
<section class="hero news-hero">
  <div class="hero-content">
    <p class="section-label">The Malone Panther</p>
    <h1>$SectionTitle</h1>
    <p>$Description</p>
  </div>
</section>

<!-- ========== BREADCRUMB ========== -->
<nav class="breadcrumb" aria-label="Breadcrumb" id="breadcrumb"></nav>

<!-- ========== MAIN CONTENT ========== -->
<main class="page-content">

  <section class="content-section">
    <h2>$SectionTitle News</h2>
    <p>
      This section collects reporting, analysis, updates, and reference coverage for the
      <strong>$SectionTitle</strong> section of <em>The Malone Panther</em>.
    </p>
  </section>

  <section class="content-section">
    <h2>Latest Articles</h2>
    <p>
      Articles will appear here as this section is developed.
    </p>

    <div class="article-list">
      <!--
      Example article card:

      <article class="article-card">
        <p class="article-meta">News Section • Month Day, Year</p>
        <h3><a href="article-file-name.html">Article Title</a></h3>
        <p>Short article summary goes here.</p>
      </article>
      -->
    </div>
  </section>

  <section class="content-section">
    <h2>Section Notes</h2>
    <p>
      Use this index as the landing page for this news section. Add article cards,
      subsection links, featured stories, or recurring editorial notes as the folder grows.
    </p>
  </section>

</main>

<!-- ========== FOOTER ========== -->
<div id="footer-placeholder"></div>
<script>
fetch('/component/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
</script>

</body>
</html>
"@
}

# ------------------------------------------------------------
# CREATE FOLDERS AND INDEX FILES
# ------------------------------------------------------------

foreach ($Folder in $Folders) {
    $FullPath = Join-Path $NewsRoot $Folder

    if (!(Test-Path $FullPath)) {
        New-Item -ItemType Directory -Path $FullPath | Out-Null
        Write-Host "Created folder: $Folder" -ForegroundColor Green
    }
    else {
        Write-Host "Folder exists: $Folder" -ForegroundColor DarkGray
    }

    $IndexPath = Join-Path $FullPath "index.html"
    $LeafSlug = Split-Path $Folder -Leaf
    $SectionTitle = Convert-SlugToTitle $LeafSlug
    $Description = Get-SectionDescription -FolderPath $Folder -SectionTitle $SectionTitle

    if (!(Test-Path $IndexPath) -or $OverwriteExisting) {
        $Html = New-NewsIndexHtml -SectionTitle $SectionTitle -Description $Description
        Set-Content -Path $IndexPath -Value $Html -Encoding UTF8
        Write-Host "Created index: $Folder\index.html" -ForegroundColor Cyan
    }
    else {
        Write-Host "Index exists, skipped: $Folder\index.html" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "MGU newspaper folder and index build complete." -ForegroundColor Green
Write-Host ""

# ------------------------------------------------------------
# VERIFY MISSING INDEX FILES
# ------------------------------------------------------------

Write-Host "Checking for folders missing index.html..." -ForegroundColor Cyan

$MissingIndexes = Get-ChildItem $NewsRoot -Directory -Recurse | Where-Object {
    !(Test-Path (Join-Path $_.FullName "index.html"))
}

if ($MissingIndexes.Count -eq 0) {
    Write-Host "All folders have index.html files." -ForegroundColor Green
}
else {
    Write-Host "Folders missing index.html:" -ForegroundColor Red
    $MissingIndexes | Select-Object FullName
}