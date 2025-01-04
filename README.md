# Bruno Collection for Yahoo Finance

This repository contains a [Bruno](https://www.usebruno.com/) collection for interacting with Yahoo Finance's public API endpoints. Although Yahoo Finance discontinued their official API documentation in 2017, these endpoints remain publicly accessible and functional.

![Bruno Collection for Yahoo Finance](.github/screenshots/bruno-yahoo-finance.png)

## Prerequisites

- Install [Bruno](https://www.usebruno.com/downloads).
- Git (optional, for cloning this repository).

## Setup

1. Clone this repository:

```bash
git clone https://github.com/gzurowski/bruno-yahoo-finance.git
```

Alternatively, you can download the collection as a [ZIP file](https://github.com/gzurowski/bruno-yahoo-finance/archive/refs/heads/main.zip).

2. Open the `bruno-yahoo-finance` folder in Bruno.
3. Click on _Open Collection_.
4. Navigate to the cloned repository folder and click _Open_.

## Authentication

All Yahoo Finance endpoints require authentication using:
- A cookie.
- A token named `crumb` which must be included as a query parameter in every request.
Both the cookie and the token are obtained through two separate requests.
These requests are automatically run by a _pre-request_ script on collection-level.
Once retrieved, the cookie and the token are stored as variables and automatically included in all requests.
The script is stored in [scripts/auth.js](scripts/auth.js).
For reference, this repository also includes separate requests in the [Auth](Auth) folder.
These are provided for informational purposes only and do not need to be manually run.

## Notes

- The endpoints are not officially documented and are subject to change.
- Rate limiting may apply.
