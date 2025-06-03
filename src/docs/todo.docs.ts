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
 *
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
 *
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Invalid input
 */
