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


Kubectl delete cmd:
# Delete pods and services with same names "baz" and "foo"
kubectl delete pod,service baz foo

# Delete pods and services with label name=myLabel.
kubectl delete pods,services -l name=myLabel

# Delete a pod with UID 1234-56-7890-234234-456456.
kubectl delete pod 1234-56-7890-234234-456456

# Delete all pods
kubectl delete pods --all

#Delete the all YAMLS in a folder
kubectl delete -f cluster-ip/

