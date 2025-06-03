/**
 * @swagger
 * tags:
 *   - name: Todo
 *     description: Todo management APIs
 *
 * components:
 *   schemas:
 *     CreateTodoDTO:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - dueDate
 *       properties:
 *         title:
 *           type: string
 *           example: "Buy groceries"
 *         description:
 *           type: string
 *           example: "Milk, bread, eggs"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2025-06-05T10:00:00Z"
 *     UpdateTodoDTO:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Buy groceries updated"
 *         description:
 *           type: string
 *           example: "Milk, bread, eggs, and cheese"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2025-06-06T10:00:00Z"
 *         completed:
 *           type: boolean
 *           example: true
 *     TodoResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "60c72b2f9eb1a8b4f8dcbef1"
 *         title:
 *           type: string
 *           example: "Buy groceries"
 *         description:
 *           type: string
 *           example: "Milk, bread, eggs"
 *         status:
 *           type: string
 *           example: "pending"
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2025-06-05T10:00:00Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-06-01T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-06-02T12:00:00Z"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 
 * @openapi
 * /api/todos/add:
 *   post:
 *     summary: Create a new Todo
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Todo data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTodoDTO'
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Todo created successfully
 *                 data:
 *                   $ref: '#/components/schemas/TodoResponse'
 *       400:
 *         description: Failed to create Todo
  
 * @openapi
 * /api/todos/update/{id}:
 *   put:
 *     summary: Update Todo by ID
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Todo ID to update
 *         required: true
 *         schema:
 *           type: string
 *           example: 60c72b2f9eb1a8b4f8dcbef1
 *     requestBody:
 *       description: Fields to update in Todo
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTodoDTO'
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Todo updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/TodoResponse'
 *       404:
 *         description: Todo not found
 */
