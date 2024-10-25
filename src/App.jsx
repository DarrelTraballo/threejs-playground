import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { PageLayout } from "./components/PageLayout"
import WaterShader from "./_Scenes/WaterShader/pages/WaterShader"
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
                            <WaterShader />
                        </PageLayout>
                    }
                />
            </Routes>
        </Router>
    )
}
