import * as dao from "./dao.js";

function CourseRoutes(app) {
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    };
    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
        return;
    };
    const findCourseById = async (req, res) => {
        const course = await dao.findCourseById(req.params.id);
        res.json(course);
    };
    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        const currentCourse = await dao.findCourseById(id);
        res.json(status);
    };
    app.post("/api/courses", createCourse);
    app.get("/api/courses", findAllCourses);
    app.get("/api/courses/:id", findCourseById);
    app.put("/api/courses/:id", updateCourse);
    app.delete("/api/courses/:id", deleteCourse);
}
export default CourseRoutes;