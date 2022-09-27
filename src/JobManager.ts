import { randomUUID } from 'crypto';
import { Job } from './models/Job';

export class JobManager {
  jobs: Job[] = [];

  public addJob(url: string): string {
    const id = randomUUID();
    this.jobs.push({id, url});

    return id;
  }

  public getJob(id: string): Job | undefined {
    return this.jobs.find((job) => job.id === id);
  }
}