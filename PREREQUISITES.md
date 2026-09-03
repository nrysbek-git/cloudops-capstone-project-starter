# Требования перед началом capstone

## Для кого предназначен проект

Проект выполняется после изучения базовых тем первого семестра и основных
инфраструктурных тем второго семестра. Студенту не требуется писать бизнес-логику
frontend или backend: его задача — построить воспроизводимый DevOps-процесс.

## Необходимые знания

Перед началом студент должен уметь:

- работать в Linux/macOS terminal и понимать пути, permissions и processes;
- использовать Git: branch, commit, pull request, merge и `.gitignore`;
- объяснять IP address, port, DNS, HTTP/HTTPS и private/public subnet;
- читать Dockerfile и запускать containers;
- понимать environment variables и не хранить secrets в Git;
- читать YAML и базовые Kubernetes resources;
- выполнять базовые SQL-запросы в PostgreSQL;
- понимать назначение IAM и принцип least privilege.

## Необходимые инструменты

- Git и GitHub account;
- Docker Desktop или Docker Engine с Compose;
- AWS CLI v2 и учебный AWS account/sandbox;
- Terraform;
- `kubectl`;
- текстовый редактор, например VS Code;
- Helm — опционально.

Проверьте окружение:

```bash
git --version
docker --version
docker compose version
aws --version
terraform version
kubectl version --client
```

## Доступы

До начала cloud-части преподаватель должен подтвердить:

- AWS region и ограничения учебного account;
- доступные quotas и budget;
- GitHub repository для проекта;
- предоставляется ли учебный subdomain;
- разрешён ли индивидуальный EKS cluster или используется общий cluster.

Покупать domain и использовать личную банковскую карту студент не обязан.

## Проверка готовности

Студент готов начать, если он может самостоятельно:

1. клонировать repository и создать отдельную branch;
2. запустить простой container;
3. объяснить путь запроса browser → frontend → backend → database;
4. войти в учебный AWS account без публикации credentials;
5. назвать команду, которая удалит созданную Terraform-инфраструктуру.

