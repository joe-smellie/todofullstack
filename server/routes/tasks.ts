import Router from 'express'
import * as db from '../db/db.ts'

const router = Router()

//GET 'api/v1/tasks'

router.get('/', async(req, res) => {
    try {
        const tasks = await db.getTasks()
        res.json(tasks)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})
//Get 'api/v1/tasks/:id'

router.get('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id)
        const tasks = await db.getTaskById(id)
        res.json(tasks)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})

//POST 'api/v1/tasks'
router.post('/', async (req, res) => {
    try {
        const newTask = req.body
        const id = await db.addTask(newTask)
        res.json(id)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})
//del 'api/v1/tasks/:id'

router.delete('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id)
        await db.deleteTaskById(id)
        res.sendStatus(200)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})

router.patch('/complete/:id', async(req, res) => {
        try {
            const id = Number(req.params.id)
            await db.completedTask(id)
            res.sendStatus(200)
        } catch (error) {
            console.error(`Database error ${error}`)
            res.sendStatus(500)
        }
    })

router.patch('/incomplete/:id', async(req, res) => {
        try {
            const id = Number(req.params.id)
            await db.incompletedTask(id)
            res.sendStatus(200)
        } catch (error) {
            console.error(`Database error ${error}`)
            res.sendStatus(500)
        }
    })

export default router