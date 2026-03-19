import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NotFoundPage from "./pages/Notfoundpage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DocumentListPage from "./pages/Documents/Documentlistpage";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import DocumentDetailPage from "./pages/Documents/Documentdetailpage";
import FlashcardListPage from "./pages/Flashcards/Flashcardlistpage";
import FlashCard from "./pages/Flashcards/Flashcard";
import QuizTakePage from "./pages/Quizzes/Quiztakepage";
import QuizResults from "./pages/Quizzes/Quizresults";
import ProfilePage from "./pages/Profile/ProfilePage";

const App = () => {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes can be added here*/}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<DocumentListPage />} />
          <Route path="/documents/:id" element={<DocumentDetailPage />} />
          <Route path="/flashcards" element={<FlashcardListPage />} />
          <Route path="/documents/:id/flashcards" element={<FlashCard />} />
          <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
          <Route path="/quizzes/:quizId/results" element={<QuizResults />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
