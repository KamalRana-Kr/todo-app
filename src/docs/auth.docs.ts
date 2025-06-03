/**
 * @openapi
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     operationId: signupUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Urmit
 *               lastName:
 *                 type: string
 *                 example: Rana
 *               email:
 *                 type: string
 *                 format: email
 *                 example: urmit123@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Abc!@123
 *               isActive:
 *                 type: boolean
 *                 description: Optional flag to activate user on signup
 *                 example: true
 *     responses:
 *       "201":
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: User registered successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: d290f1ee-6c54-4b01-90e6-d701748f0851
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *       "400":
 *         description: Bad Request / Validation Error
 *       "500":
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - Auth
 *     operationId: loginUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: urmit123@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Abc!@123
 *     responses:
 *       "200":
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: User logged in successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       "401":
 *         description: Invalid credentials
 *       "500":
 *         description: Internal server error
 */
