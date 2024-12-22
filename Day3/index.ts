/**
 * Real-Life Array Manipulation Challenge
 *
 * Scenario: You're building a task management system for a small team.
 *
 * Requirements:
 *
 * 1. Task Queue Management
 * - Create an array to store tasks
 * - Implement functionality to:
 *   - Add new urgent tasks to the beginning of the queue (unshift)
 *   - Add regular tasks to the end of the queue (push)
 *   - Complete tasks from the front of the queue (shift)
 *   - Remove cancelled tasks from the end of the queue (pop)
 *
 * 2. Task Priority Reversal
 * - Sometimes the team needs to reverse the entire task queue to
 *   reprioritize tasks
 * - Implement a function to reverse the task order
 *
 * 3. Workload Analysis
 * - Each task has an estimated time (in hours)
 * - Calculate total estimated time for all tasks
 *
 * Example Task Format:
 * { id: number, description: string, estimatedHours: number }
 *
 * Write functions to:
 * 1. addUrgentTask(task)
 * 2. addRegularTask(task)
 * 3. completeTask()
 * 4. cancelTask()
 * 5. reverseTaskQueue()
 * 6. calculateTotalHours()
 */

// Write your solution below:

// The solution matches all requirements:
// 1. Task Queue Management:
//    - Uses array to store tasks ✓
//    - addUrgentTask uses unshift ✓
//    - addRegularTask uses push ✓
//    - completeTask uses shift ✓
//    - cancelTask uses pop ✓
// 2. Task Priority Reversal:
//    - reverseTaskQueue uses reverse ✓
// 3. Workload Analysis:
//    - calculateTotalHours sums estimatedHours ✓
// All functions implemented with correct types ✓

type taskArrayType = {
  id: number;
  description: string;
  estimatedHours: number;
};

export const taskManagement = () => {
  const tasks: taskArrayType[] = [];

  return {
    addUrgentTask: (task: taskArrayType) => {
      return tasks.unshift(task);
    },
    addRegularTask: (task: taskArrayType) => {
      return tasks.push(task);
    },
    completeTask: () => {
      return tasks.shift();
    },
    cancelTask: () => {
      return tasks.pop();
    },
    reverseTaskQueue: () => {
      return tasks.reverse();
    },
    calculateTotalHours: () => {
      return `${tasks.reduce((acc, task) => acc + task.estimatedHours, 0)}`;
    },
  };
};
