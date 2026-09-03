# Troubleshooting guide

Документ содержит направления диагностики, но не готовую реализацию задания.

## Git и GitHub

### `Permission denied (publickey)`

Проверьте remote и SSH authentication:

```bash
git remote -v
ssh -T git@github.com
```

В remote должен находиться обычный Git URL без Markdown-скобок.

### HTTPS требует password

GitHub не принимает account password для Git operations. Используйте SSH или
Personal Access Token в соответствии с правилами курса.

## Docker Compose

### Docker daemon недоступен

Запустите Docker Desktop и проверьте:

```bash
docker info
docker compose version
```

### Service не становится healthy

```bash
docker compose ps
docker compose logs database
docker compose logs backend
```

Проверьте healthcheck, hostname database service, environment variables и
порядок запуска. Внутри Compose нельзя использовать `localhost` как hostname
другого container.

## Terraform и AWS

### `AccessDenied`

Проверьте активную identity, region и IAM permissions:

```bash
aws sts get-caller-identity
aws configure list
```

Не расширяйте policy до AdministratorAccess без согласования.

### State lock или backend error

Не удаляйте lock вслепую. Сначала убедитесь, что другой `terraform apply` не
запущен, и проверьте S3 backend configuration и CI concurrency.

## Kubernetes

### Pod имеет `Pending`, `ImagePullBackOff` или `CrashLoopBackOff`

```bash
kubectl -n cloudops-academy get pods
kubectl -n cloudops-academy describe pod POD_NAME
kubectl -n cloudops-academy logs POD_NAME --previous
```

Проверьте scheduling events, image URI/tag, ECR permissions, environment
variables, Secret references, probes и database connectivity.

### Service не имеет endpoints

Сравните Service selector с labels Pod:

```bash
kubectl -n cloudops-academy get service,endpoints
kubectl -n cloudops-academy get pods --show-labels
```

### Load Balancer долго создаётся

Проверьте Service/Ingress events, controller logs, subnet tags, security groups и
AWS quotas. Создание external hostname может занять несколько минут.

## Database

При ошибке подключения проверьте DNS hostname, port, database name, Secret,
security groups и route между EKS nodes и private RDS. Не публикуйте пароль в
terminal output, screenshots или issue.

## Как просить помощь

Приложите название task, ожидаемый результат, точную команду, полный текст ошибки
без secrets и уже выполненные проверки. Не отправляйте AWS keys, passwords,
kubeconfig или содержимое Kubernetes Secret.

