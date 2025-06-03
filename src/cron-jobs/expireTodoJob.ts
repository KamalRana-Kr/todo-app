import cron from 'node-cron';
import { Todo } from '../modules/todo/todo.model';

cron.schedule('0 0 * * *', async () => {
    try {
        await Todo.updateMany(
            {
                dueDate: {
                    $lt: new Date()
                },
                completed: false
            },
            {
                completed: true
            }
        );
        console.log('Expired todos marked as completed');
    } catch (error) {
        console.error('Error in Expire todos cron job:', error);
    }
});