import { Request, Response } from 'express';
import { Task } from '../model/Task';
import * as yup from 'yup';

class TaskController {
  async create (request: Request, response: Response) {
    const { username, activity } = request.body;

    let formatted_username = username.trim();

    let activity_validation = JSON.stringify(activity);

    let original_activity = activity_validation.substring(2, (activity_validation.length - 2));

    let formatted_activity = activity_validation.substring(2, (activity_validation.length - 2)).trim();

    if ((username !== formatted_username) || (original_activity !== formatted_activity)) {
      return response.status(400).json('Username or activity is empty!');
    }

    const schema = yup.object().shape({
      username: yup.string().required(),
      activity: yup.array().min(1).required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json(err);
    }

    const usernameAlreadyExists = await Task.findOne({
      username
    });

    if (usernameAlreadyExists) {
      return response.status(400).json('User already exists!');
    }

    await Task.create(request.body);

    return response.status(201).json(request.body);
  }

  async findByUsername (request: Request, response: Response) {
    const { username } = request.params;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    if (!task) {
      return response.status(400).json('User not exists!');
    }

    const activity = task.activity;

    return response.status(200).json(activity);
  }

  async replaceActivity (request: Request, response: Response) {
    const { username, activity_name } = request.params;
    const { activity } = request.body;

    const schema = yup.object().shape({
      activity: yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json(err);
    }

    const task = await Task.findOne({ username: username }).select('activity -_id');

    if (!task) {
      return response.status(400).json('User not exists!');
    }

    for (let item in task.activity) {
      if (task.activity[item].toLowerCase() === activity_name) {
        const task_replaced = task.activity[item];

        task.activity[item] = activity;

        await Task.findOneAndUpdate(
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

        return response.status(200).json(task_replaced + ' replaced by ' + activity);
      }
    }

    return response.status(400).json('Activity not found!');
  }

  async updateActivity (request: Request, response: Response) {
    const { username } = request.params;
    const { activity } = request.body;

    let activity_validation = JSON.stringify(activity);

    let formatted_activity = activity_validation.substring(1, (activity_validation.length - 1)).trim();

    let formatted_username = username.substring(1, (username.length - 1)).trim();

    if (!formatted_activity.length || !formatted_username.length) {
      return response.status(400).json('Username or activity is empty!');
    }

    const schema = yup.object().shape({
      activity: yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json(err);
    }

    const task = await Task.findOne({ username: username }).select('activity -_id');

    if (!task) {
      return response.status(400).json('User not exists!');
    }

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

    return response.status(200).json(task_update.activity);
  }

  async removeActivity (request: Request, response: Response) {
    const { username, activity_name } = request.params;

    const task = await Task.findOne({ username: username }).select('activity -_id');

    if (!task) {
      return response.status(400).json('User not exists!');
    }

    for (let item in task.activity) {
      if (task.activity[item].toLowerCase() === activity_name) {
        const task_deleted = task.activity[item];

        task.activity.splice(item, 1);

        await Task.findOneAndUpdate(
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

        return response.status(200).json(task_deleted + ' deleted!');
      }
    }

    return response.status(400).json('Activity not found!');
  }

  async deleteActivity (request: Request, response: Response) {
    const { username } = request.params;

    const usernameAlreadyExists = await Task.findOne({
      username
    });

    if (!usernameAlreadyExists) {
      return response.status(400).json('User not exists!');
    }

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

    return response.status(200).json([]);
  }
}

export { TaskController };