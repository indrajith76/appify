# Project Name : Appify - App Discovery Web Application

## Live Website Link - https://appify-web.netlify.app/

### Appify is a modern web application where users can explore popular mobile applications, view details, analyze ratings, and manage their installed apps. It provides an interactive experience similar to an app marketplace.

## In this Project I used :

- React Vite
- React Router
- Tailwind CSS
- DaisyUI
- React Icons
- Recharts
- React Hot Toast
- LocalStorage
- JSON

## In This Project what I did?

- First I created a React application using **Vite** for faster development.
- Then I installed **Tailwind CSS and DaisyUI** to design a modern and responsive UI.
- After that I created the **main layout with Header and Footer**.
- In the header I added a **logo, navigation menu (Home, Apps, Installation)** and an **active route indicator using NavLink**.
- I also added a **Contribution button linking to my GitHub profile**.
- Then I created a **JSON data file containing multiple apps** with details such as title, company name, rating, downloads and reviews.
- After that I built the **Home page with banner, statistics section and top apps section**.
- I displayed the **Top 8 apps in a four-column grid layout** and added a **Show All button** to navigate to the Apps page.
- Then I created the **All Apps page with live search functionality** that filters apps by title in a case-insensitive way.
- If no app matches the search, the application shows a **No App Found message**.
- I created an **App Details page** where users can view full app information such as ratings, downloads, reviews and description.
- I implemented an **Install button** that changes to **Installed** after clicking and shows a success toast notification.
- The installed apps are stored in **LocalStorage** so they persist after page reload.
- Then I implemented the **My Installation page** where users can see all installed apps.
- Users can also **Uninstall apps**, which removes them from both **LocalStorage and UI** with a toast message.
- I used the **Recharts library** to display an interactive **review chart** showing rating distribution.
- I added **sorting functionality** to sort apps by download count (High → Low or Low → High).
- I created a **custom error page** to handle invalid routes.
- Finally, I made the entire application **fully responsive for mobile, tablet, and desktop devices**.
 
