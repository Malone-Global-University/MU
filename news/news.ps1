# ============================================================
# MGU Newspaper Section Folder + Index Builder
# Root: C:\MGU\news
# ============================================================

$NewsRoot = "C:\MGU\news"
$OverwriteExisting = $false
$Today = Get-Date -Format "MM-dd-yyyy"

# ------------------------------------------------------------
# SECTION STRUCTURE
# Add or remove folders here as the newspaper grows.
# ------------------------------------------------------------

$Folders = @(
    "africa",
    "campus",
    "culture",
    "diaspora",
    "digest",
    "economy",
    "features",

    "forums",
    "forums\civic-center",
    "forums\commons",

    "heritage",
    "investigative-reports",
    "mgu-report",
    "north-america",

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
    "wellness",
    "world"
)

# ------------------------------------------------------------
# TITLE HELPER
# Converts folder slugs into readable section titles.
# ------------------------------------------------------------

function Convert-SlugToTitle {
    param([string]$Slug)

    $SpecialCases = @{
        "us" = "U.S."
        "mgu" = "MGU"
        "mgu-report" = "MGU Report"
        "law-and-government" = "Law and Government"
        "state-and-local" = "State and Local"
        "earth-climate-and-environment" = "Earth, Climate, and Environment"
        "health-and-biology" = "Health and Biology"
        "physics-chemistry-and-math" = "Physics, Chemistry, and Math"
        "space-and-astronomy" = "Space and Astronomy"
        "technology-and-engineering" = "Technology and Engineering"
        "civic-center" = "Civic Center"
        "guest-essays" = "Guest Essays"
        "media-criticism" = "Media Criticism"
        "investigative-reports" = "Investigative Reports"
        "north-america" = "North America"
        "civic-education" = "Civic Education"
        "public-policy" = "Public Policy"
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
# Customize descriptions here.
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
        [string]$Description,
        [string]$RelativePath
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
        $Html = New-NewsIndexHtml -SectionTitle $SectionTitle -Description $Description -RelativePath $Folder
        Set-Content -Path $IndexPath -Value $Html -Encoding UTF8
        Write-Host "Created index: $Folder\index.html" -ForegroundColor Cyan
    }
    else {
        Write-Host "Index exists, skipped: $Folder\index.html" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "MGU newspaper folder and index build complete." -ForegroundColor Green