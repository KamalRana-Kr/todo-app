/**
 * @swagger
 * tags:
 *   - name: Todo
 *     description: Todo management APIs
 *
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
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
 */

/**
 * @swagger
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
 */

/**
 * @swagger
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: Todo not found
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/todos/get/{id}:
 *   get:
 *     summary: Get Todo details by ID
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Todo ID
 *         required: true
 *         schema:
 *           type: string
 *           example: 60c72b2f9eb1a8b4f8dcbef1
 *     responses:
 *       200:
 *         description: Todo details
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
 *                   example: Todo fetched successfully
 *                 data:
 *                   $ref: '#/components/schemas/TodoResponse'
 *       404:
 *         description: Todo not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: Todo not found
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */
/**
 * @swagger
 * /api/todos/list:
 *   get:
 *     summary: Get Todo list with pagination
 *     tags:
 *       - Todo
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination (default is 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of todos per page (default is 10)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum:
 *             - "true"
 *             - "false"
 *         description: Filter todos by completion status ('true' for completed, 'false' for pending)
 *     responses:
 *       200:
 *         description: Successfully fetched todos list
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
 *                   example: Todos fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     todos:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/TodoResponse'
 *                     total:
 *                       type: integer
 *                       example: 45
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     totalPages:
 *                       type: integer
 *                       example: 5
 *       404:
 *         description: No todos found for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Todo list is empty"
 *                 data:
 *                   type: object
 *                   properties:
 *                     todos:
 *                       type: array
 *                       items: {}
 *                     total:
 *                       type: integer
 *                       example: 0
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     totalPages:
 *                       type: integer
 *                       example: 0
 *       401:
 *         description: Unauthorized (missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 */

