# Eye Manga - buy manga, anime stickers/posters and more

Eye Manga is a modern React-powered platform for exploring manga series, built with **Vite**, **Supabase**, and **Meta (Instagram) OAuth**.

## 🚀 Features

- **Manga Catalog**: Integrated with TMDB for a rich media library.
- **Instagram Authentication**: Real OAuth integration via Supabase & Meta for Developers.
- **Cloud Storage**: Image uploads handled by Supabase Storage.
- **Dynamic Database**: Database management via Supabase (PostgreSQL).
- **Premium Design**: Sleek, manga-inspired UI with dark mode and custom animations.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, React Router
- **Backend/Database**: Supabase
- **Authentication**: Supabase Auth (Facebook/Instagram Provider)
- **Styling**: Vanilla CSS with a focus on premium aesthetics.

## 📦 Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Ravelcut/eyemanga.git
    cd eyemanga
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_INSTAGRAM_APP_ID=your_meta_app_id
    VITE_INSTAGRAM_APP_SECRET=your_meta_app_secret
    ```

4.  **Supabase Configuration**:
    -   Create a storage bucket named `manga-images` and set it to **Public**.
    -   Create a table named `manga_items` with a `name` (text) and `image_url` (text) column.
    -   Enable the **Facebook** provider in Authentication and use your Meta App ID/Secret.

5.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 📜 License
This project is for individual use part of the "Project iManga" development.
