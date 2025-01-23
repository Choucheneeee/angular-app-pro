I
## **Summary of Commands**
Here’s a quick reference for updating your project:

### **Rebuild and Push Docker Image**
```bash
npm run build -- --configuration production
docker build -t chouchenee/angular-app:v2 .
docker push chouchenee/angular-app:v2
```

### **Update Kubernetes Deployment**
```bash
kubectl apply -f deployment.yaml
kubectl set image deployment/angular-app angular-app=chouchenee/angular-app:v2
```

```

---

Let me know if you need further assistance! 😊


minikube service angular-app-service --url
