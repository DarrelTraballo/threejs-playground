import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { PageLayout } from "./components/PageLayout"
import WaterScene from "./_Scenes/WaterShader/pages/WaterScene"
import "./App.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Water" />} />
                <Route
                    path="/Water"
                    element={
                        <PageLayout title="Water Shader Demo">
                            <WaterScene />
                        </PageLayout>
                    }
                />
            </Routes>
        </Router>
    )
}
