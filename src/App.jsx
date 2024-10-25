import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import WaterShader from "./_Scenes/WaterShader/pages/WaterShader"
import "./App.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Water" />} />
                <Route path="/Water" element={<WaterShader />} />
            </Routes>
        </Router>
    )
}
