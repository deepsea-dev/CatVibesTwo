import { JobManager } from '../src/JobManager';

describe('Job Manager', () => {
  let manager: JobManager;

  const testUrl = 'https://www.youtube.com/watch?v=A8i3mpYQx3Y';

  beforeEach(() => {
    manager = new JobManager();
  });

  it('returns an id when a job is submitted', () => {
    expect(manager.addJob(testUrl)).toBeDefined();
  });

  it('returns added jobs by id', () => {
    const id = manager.addJob(testUrl);
    const job = manager.getJob(id);
    expect(job).toBeDefined();
    expect(job?.url).toEqual(testUrl);
  });

  it('returns undefined for jobs that dont exist', () => {
    expect(manager.getJob('none')).toBeUndefined();
  });
});