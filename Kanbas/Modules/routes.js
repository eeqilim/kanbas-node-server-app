import * as dao from "./dao.js";

function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.id);
        res.json(status);
    };
    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
        return;
    };
    const findModuleById = async (req, res) => {
        const module = await dao.findModuleById(req.params.id);
        res.json(module);
    };
    const updateModule = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateModule(id, req.body);
        const currentModule = await dao.findModuleById(id);
        res.json(status);
    };
    app.post("/api/modules", createModule);
    app.get("/api/courses/:cid/modules", findAllModules);
    app.get("/api/courses/:cid/modules/:id", findModuleById);
    app.put("/api/modules/:id", updateModule);
    app.delete("/api/modules/:id", deleteModule);
}
export default ModuleRoutes;