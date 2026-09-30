# Changelog

All notable changes to FusionCharts are recorded here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

For upgrade guidance and changed behaviour, see
[Version History](https://www.fusioncharts.com/dev/upgrading/change-log) on the developer site.

## [4.2.3] - 2026-09-30

### Security

- Upgrade DOMPurify to 3.4.16, clearing advisories reported against the version bundled in 4.2.2.
  DOMPurify is compiled into `fusioncharts.js`, so upgrading this package is the only way to pick
  the fix up.

### Fixed

- Legend labels no longer take their colour from a series `valuefontcolor`. The rollout label
  colour is now resolved without a legend-text lookup.
- Gantt charts no longer throw when a task bar has no following element. `nextEl` is now guarded
  before the `taskFill` id comparison.

## [4.2.2] - 2026-04-01

### Changed

- The jQuery plugin is now hosted on the FusionCharts CDN, with both
  [versioned](https://cdn.fusioncharts.com/jquery-fusioncharts/v2.0.1/jquery.fusioncharts.min.js)
  and [latest](https://cdn.fusioncharts.com/jquery-fusioncharts/latest/jquery.fusioncharts.min.js)
  paths available.

### Fixed

- Scroll position now resets to the beginning when the chart type is changed.
- Zoom, reset and scroll behaviour in ZoomLine charts. Zoom and reset states are maintained
  correctly across multiple zoom levels and when scrolling.
- `showPlotBorder` with `plotBorderThickness` no longer draws thin internal lines in negative
  stacks. Borders render seamlessly between segments in stacked column 2D charts.

## [4.2.1] - 2026-01-27

### Security

- Upgrade jsPDF and DOMPurify.

### Added

- FusionTime: strict, min and max padding controls on the time axis, with expanded domain
  utilities.

### Fixed

- Horizontal scroll now renders correctly. An extra vertical-scroll check was preventing it.

## 4.2.0 - 2025-09-05

- See [Version History](https://www.fusioncharts.com/dev/upgrading/change-log) on the developer
  site for releases at and before 4.2.0.

[4.2.3]: https://github.com/fusioncharts/fusioncharts-dist/releases/tag/4.2.3
[4.2.2]: https://github.com/fusioncharts/fusioncharts-dist/releases/tag/4.2.2
[4.2.1]: https://github.com/fusioncharts/fusioncharts-dist/releases/tag/4.2.1
