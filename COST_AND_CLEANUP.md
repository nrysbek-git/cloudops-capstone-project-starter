# AWS budget и cleanup

## Правило безопасности бюджета

Используйте только учебный AWS account/sandbox и разрешённый преподавателем
region. До `terraform apply` покажите преподавателю plan и примерную стоимость.
Личная банковская карта и покупка domain не являются требованиями проекта.

Наибольшую стоимость обычно создают EKS control plane, EC2 worker nodes, NAT
Gateway, RDS и Load Balancer. Актуальные цены зависят от region и должны
проверяться по официальному AWS Pricing перед запуском.

## До создания ресурсов

- настройте AWS Budget и notifications, если sandbox это позволяет;
- используйте минимальные разрешённые instance sizes;
- добавьте обязательные tags: project, student, environment и owner;
- согласуйте время проверки, чтобы infrastructure не простаивала;
- сохраните Terraform state в remote backend.

## Во время работы

```bash
terraform -chdir=terraform plan
kubectl get nodes
kubectl get service -A
aws sts get-caller-identity
```

Не создавайте дублирующие clusters, NAT Gateways, RDS instances или Load
Balancers для исправления ошибки. Сначала диагностируйте существующий resource.

## Cleanup после защиты

1. Сохраните разрешённые evidence и workflow logs.
2. Удалите Kubernetes resources, которые создали external Load Balancers.
3. Убедитесь, что cloud Load Balancers удалены.
4. Выполните Terraform destroy тем же state и variables:

   ```bash
   terraform -chdir=terraform plan -destroy
   terraform -chdir=terraform destroy
   ```

5. Проверьте AWS Console/CLI на оставшиеся EKS, EC2, RDS, NAT Gateway, Elastic IP
   и Load Balancer resources.
6. ECR images, logs и state bucket удаляйте только по политике курса. Remote
   state нельзя удалять до подтверждения успешного destroy.

## Evidence cleanup

В `EVIDENCE.md` укажите дату cleanup и приложите безопасное подтверждение без
account secrets. Не коммитьте Terraform state или credential files.

