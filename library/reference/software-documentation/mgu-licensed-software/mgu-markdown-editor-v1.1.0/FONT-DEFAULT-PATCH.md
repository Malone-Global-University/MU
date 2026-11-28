# v1.1.0 preview font default refinement

Extract into the existing v1.1.0 application directory, overwriting the five matching files. This patch changes the initial preview and Reset Display default from 18 px to 16 px. Previously saved preferences are retained. Select 16 px in View or use Reset Display to update the existing workspace. PDF font size and standalone renderer API defaults are unchanged. Rebuild with .\build.ps1; the test count remains 74.
