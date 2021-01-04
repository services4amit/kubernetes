# kubernetes

Docket build with tag:
docker build  -t tag-name .

k8s:
create:
kubectl create -f file-name

update:
kubectl apply -f file-name

Services:
Nodeport: to expose to browser
cluster-ip: to expose inside the cluster not to browser
Ingress: to expose the services to outside


ingress setup:
https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps

URL to access services:
http://localhost/rest
