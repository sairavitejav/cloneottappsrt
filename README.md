In this project, I built **Nxt Watch** by applying the React JS concepts like 
 1. Class Component,
 2. Event Listeners,
 3. State,
 4. Conditional Rendering,
 5. Component Life Cycle,
 6. React Router and it's components,
 7. API Calls,
 8. Authentication,
 9. Authorization,
 10. Thirde-Party Packages like:
         Loader, React Popup, React Player, Styled-components
  and some more concepts.


**Success View** <br/>

<div style="text-align: center;">
     <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
    <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>




### Completion Functionalities:

<details>
<summary>Functionalities Added</summary>
<br/>

The app have the following functionalities

- Initially, the app will be in **Light** theme

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response will be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page will be navigated to the Home Route
  - When an _unauthenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page will be navigated to the Login Route
  - When an _authenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page will be navigated to the respective route
  - When an _authenticated_ user tries to open the Login Route, then the page will be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password will be shown
  - When the **Show Password** checkbox is unchecked, then the password will be masked

- **Home Route**

  - When an _authenticated_ user opens the Home Route,
    - An HTTP GET request will be made to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with the initial value as an empty string
      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the list of videos will be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to the **Home Videos API URL**
    - When a non-empty value is provided in the search input and the search icon button is clicked
      - An HTTP GET request to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the list of videos will be displayed
    - When the HTTP GET request made to the **Home Videos API URL** returns an empty list, then the [No Videos View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output-v0.png) will be displayed
  - When a **Video** is clicked, then the page will be navigated to the Video Item Details Route
  - When the **Trending** link in the Sidebar is clicked, then the page will be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the Saved Videos Route

- **Trending Route**

  - When an _authenticated_ user opens the Trending Route,
    - An HTTP GET request will be made to the **Trending Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the list of videos will be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-light-theme-lg-output-v0.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to the **Trending Videos API URL**
  - When a **Video** is clicked, then the page will be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page will be navigated to the Home Route
  - When the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the Saved Videos Route

- **Gaming Route**

  - When an _authenticated_ user opens the Gaming Route,
    - An HTTP GET request will be made to the **Gaming Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the list of videos will be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-light-theme-lg-output-v0.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to the **Gaming Videos API URL**
  - When a **Video** is clicked, then the page will be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page will be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page will be navigated to the Trending Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the Saved Videos Route

- **Video Item Details Route**

  - When an _authenticated_ user opens the Video Item Details Route
    - An HTTP GET request will be made to the **Video Details API URL** with `jwt_token` in the Cookies and `video_id` as a path parameter
      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the response received will be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output-v0.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to the **Video Details API URL**
  - Corresponding video will be displayed using `react-player` package
  - Initially, all the three buttons (Like, Dislike, Save) will be inactive
  - When the **Like** button is clicked,
    - It is changed to active state
    - If the **Dislike** button is already in the active state, then the **Dislike** button will be changed to the inactive state
  
  - When the **Dislike** button is clicked,
    - It is changed to active state
    - If the **Like** button is already in the active state, then the **Like** button will be changed to the inactive state
  
  - When the **Save** button is clicked,
    - It is changed to active state and the respective video details will be added to the list of saved videos
    - **Save** button text will be changed to **Saved**
  
  - When the **Saved** button is clicked
    - It is changed to inactive state and the respective video details will be removed from the list of saved videos
    - **Saved** button text will be changed to **Save**

- **Saved Videos Route**

  - When an _authenticated_ user opens the Saved Videos Route,
    - If the list of saved videos is empty, then the [No Saved Videos Found View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-light-theme-lg-output-v0.png) will be displayed
    - Else, The list of saved videos will be displayed
  - When a **Video** is clicked, then the page will be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page will be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page will be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the Gaming Route

- **Not Found Route**

  - When a random/invalid path is provided as the URL path, then the page will be navigated to the Not Found Route

- **Header**

  - When the Website logo is clicked, then the page will be navigated to the Home Route
  - When the theme icon button is clicked, then the theme will be changed accordingly
  - When the **Logout** button is clicked, then the [Logout Popup](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-light-theme-lg-output-v0.png) will be displayed
    - When the **Cancel** button is clicked, then the popup will be closed and the page won't be navigated
    - When the **Confirm** button is clicked, then the page will be navigated to the Login Route

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**Login API**

#### URL: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Request

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Home Videos API**

#### URL: `https://apis.ccbp.in/videos/all?search=`

#### Method: `GET`

#### Description:

Returns a response containing the list of all videos

#### Response

```json
{
  "total": 60,
  "videos": [
    {
      "id": "30b642bd-7591-49f4-ac30-5c538f975b15",
      "title": "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
      "channel": {
        "name": "iB Cricket",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
      },
      "view_count": "1.4K",
      "published_at": "Apr 19, 2019"
    },
    ...
  ],
}
```

**Trending Videos API**

#### URL: `https://apis.ccbp.in/videos/trending`

#### Method: `GET`

#### Description:

Returns a response containing the list of trending videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
      "title": "iB Hubs Announcement Event",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
      "channel": {
        "name": "iB Hubs",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
      },
      "view_count": "26K",
      "published_at": "Nov 29, 2016"
    },
    ...
  ]
}
```

**Gaming Videos API**

#### URL: `https://apis.ccbp.in/videos/gaming`

#### Method: `GET`

#### Description:

Returns a response containing the list of gaming videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "b214dc8a-b126-4d15-8523-d37404318347",
      "title": "Drop Stack Ball",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
      "view_count": "44K"
    },
    ...
  ]
}
```

**Video Details API**

#### URL: `https://apis.ccbp.in/videos/:id`

#### Example: `https://apis.ccbp.in/videos/802fcd20-1490-43c5-9e66-ce6dfefb40d1`

#### Method: `GET`

#### Description:

Returns a response containing the details of a specific video

#### Response

```json
{
  "video_details": {
    "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
    "title": "iB Hubs Announcement Event",
    "video_url": "https://www.youtube.com/watch?v=pT2ojWWjum8",
    "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
    "channel": {
      "name": "iB Hubs",
      "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
      "subscriber_count": "1M"
    },
    "view_count": "26K",
    "published_at": "Nov 29, 2016",
    "description": "iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest."
  }
}
```

</details>

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png) alt should be **profile**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png) alt should be **no videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png) alt should be **no saved videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png) alt as **not found**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png) **banner background image**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png) alt should be **facebook logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png) alt should be **twitter logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png) alt should be **linkedin logo**

</details>







This project has been done using the above concets and achieved the functionalities mentioned above.
