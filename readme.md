# GlobeTrotter Project Directory Structure

```text
GlobeTrotter/
│
├── index.html                  # Dashboard (Analytics, projector, recent trips)
│
├── pages/
│   ├── register.html
│   ├── login.html                  # Login & Signup screen
│   ├── my_itineraries.html         # My Trips Hub (Upcoming, Past, Drafts)
│   ├── plan_trip.html              # Plan New Trip (Metadata creation form)
│   ├── itinerary_builder.html      # Day-by-day Builder (Route, Timeline, Activity search)
│   └── trip_view.html              # Public / Confirmed Itinerary View
│
├── css/
│   ├── bootstrap.min.css       # Local Bootstrap 5.3 CSS
│   ├── bootstrap-icons.css     # Local Bootstrap Icons CSS
│   ├── theme.css               # Design tokens, color palette, custom styling
│   └── fonts/
│       ├── bootstrap-icons.woff
│       └── bootstrap-icons.woff2
│
├── js/
│   ├── bootstrap.bundle.min.js # Local Bootstrap 5.3 JS Bundle
│   ├── chart.min.js            # Local Chart.js 4.4.x UMD Library
│   ├── data-store.js           # Centralized mock data store and state management
│   ├── dashboard-charts.js     # Chart.js initialization and configurations for index.html
│   ├── dashboard-ui.js         # Interactive slider and event listeners for index.html
│   ├── plan-trip.js            # Form handling & image preview for plan_trip.html
│   ├── itinerary-builder.js    # Stop/activity management and timeline logic
│   └── my-itineraries.js       # Filter tabs and trip card rendering
│
└── assets/
    └── images/                 # Local assets, destination photos, and avatars
        ├── tokyo.jpg
        ├── amalfi.jpg
        ├── kyoto.jpg
        ├── santorini.jpg
        └── banff.jpg