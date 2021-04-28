import { Request, Response } from 'express';
import { Task } from '../model/Task';

class TaskController {
  async create (request: Request, response: Response) {
    const { username, activity } = request.body;

    const task = await Task.create(request.body);

    return response.json(task);
  }

  async findByUsername (request: Request, response: Response) {
    const { username } = request.params;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    const activity = task.activity;

    return response.json(activity);
  }

  async replaceActivity (request: Request, response: Response) {
    const { username, activity_name } = request.params;
    const { activity } = request.body;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    for (let item in task.activity) {
      if (task.activity[item].toLowerCase() === activity_name) {
        task.activity[item] = activity;
        
        const task_replaced = await Task.findOneAndUpdate(
          {
            username: username
          },
          {
            activity: task.activity
          },
          {
            new: true
          }
        );

        return response.json(task_replaced);
      }
    }
  }

  async updateActivity (request: Request, response: Response) {
    const { username } = request.params;
    const { activity } = request.body;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    const task_updated = [];

    task_updated.push(task.activity);

    task_updated[0].push(activity);

    const task_update = await Task.findOneAndUpdate(
      {
        username: username
      },
      {
        activity: task_updated[0]
      },
      {
        new: true
      }
    );

    return response.json(task_update);
  }

  async deleteOneActivity (request: Request, response: Response) {
    const { username, activity_name } = request.params;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    for (let item in task.activity) {
      if (task.activity[item].toLowerCase() === activity_name) {
        task.activity.splice(item, 1);
        
        const task_delete = await Task.findOneAndUpdate(
          {
            username: username
          },
          {
            activity: task.activity
          },
          {
            new: true
          }
        );

        return response.json(task_delete);
      }
    }
  }

  async deleteActivity (request: Request, response: Response) {
    const { username } = request.params;

    await Task.findOneAndUpdate(
      {
        username: username
      },
      {
        activity: []
      },
      {
        new: true
      }
    );

    return response.json('Ok');
  }
}

export { TaskController };