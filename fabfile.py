import deploytool.tasks as tasks


def create_host(project_name_prefix, project_name, environment, host):
    settings = dict(
        project_path_name='startproject',
        vhosts_path='/var/www/vhosts',
        database_engine='postgresql',
    )

    settings.update(
        project_name_prefix=project_name_prefix,
        project_name=project_name,
        environment=environment,
        hosts=[host],
    )

    return tasks.remote.RemoteHost(settings=settings)

# tasks
deploy = tasks.remote.Deployment()
rollback = tasks.remote.Rollback()
status = tasks.remote.Status()
database = tasks.remote.Database()
media = tasks.remote.Media()
restart = tasks.remote.Restart()
prune_old_instances = tasks.remote.RemoveOldInstances()
restore = tasks.remote.RestoreDatabase()
keys = tasks.provision.Keys()
list_tasks = tasks.generic.ListTasks()
shell = tasks.generic.ShellTask()
install_wheels = tasks.remote.InstallWheels()


# environments
project_name = 'startproject'
host = ''
provisioning_user = 'leukeleu'

live = create_host(
    project_name_prefix='l-',
    project_name=project_name,
    environment='live',
    host=host,
)

staging = create_host(
    project_name_prefix='s-',
    project_name=project_name,
    environment='staging',
    host=host,
)
