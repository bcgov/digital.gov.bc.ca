# Background
The configuration, as of early 2022, was over-committing resources and yet still unable to handle spikes in resource requests. While there are currently few business implications, such as cost, for over-allocating CPU and MEMORY resources, when the platform transitions to a metered service, or a pay-per-use model it will become less cost effective to request more resources than are actually used. From a reliability perspective the inability of the application to handle spikes in usage without downtime is a more immediate concern. An analysis using sysdig informed the following: 

## Namspace limits
MAX CPU REQUEST 4000m
MAX CPU LIMIT 8000m
MAX MEMORY REQUEST 16384 Mi
MAX MEMORY LIMIT 32768 Mi

### Frontend
Sysdig reports:
AVG CPU usage 0.01
AVG MEMORY usage 50Mi

Platform team recommendation: 
[Burstable](https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/#create-a-pod-that-gets-assigned-a-qos-class-of-burstable) Limits be a ratio (either 3x or 2x) of Requests
### Backend
Sysdig reports:
AVG CPU usage to be 0.01
AVG MEMORY usage 163Mi

### Mongo
Sysdig reports:
AVG CPU usage 0.01
AVG MEMORY usage 340Mi

Platform team recommendation: 
[Burstable](https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/#create-a-pod-that-gets-assigned-a-qos-class-of-burstable) Limits be a ratio (either 3x or 2x) of Requests