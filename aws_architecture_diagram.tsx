import React, { useState } from 'react';
import { Cloud, Database, Lock, Server, Globe, Shield, Zap, HardDrive, RefreshCw, Activity } from 'lucide-react';

const AWSArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const componentDetails = {
    cloudfront: {
      name: "Amazon CloudFront",
      description: "CDN for content delivery with edge locations worldwide. Reduces latency and improves performance.",
      benefits: ["Global content delivery", "DDoS protection", "SSL/TLS termination", "Caching at edge"]
    },
    waf: {
      name: "AWS WAF",
      description: "Web Application Firewall to protect against common web exploits and bots.",
      benefits: ["SQL injection protection", "XSS prevention", "Rate limiting", "Custom security rules"]
    },
    route53: {
      name: "Amazon Route 53",
      description: "Highly available DNS service with health checks and routing policies.",
      benefits: ["DNS management", "Health checks", "Traffic routing", "Domain registration"]
    },
    alb: {
      name: "Application Load Balancer",
      description: "Layer 7 load balancer that distributes traffic across multiple targets in multiple AZs.",
      benefits: ["Path-based routing", "SSL termination", "Health checks", "Auto scaling integration"]
    },
    ec2: {
      name: "Amazon EC2 Auto Scaling",
      description: "Compute instances in Auto Scaling groups across multiple availability zones.",
      benefits: ["Automatic scaling", "High availability", "Cost optimization", "Multiple instance types"]
    },
    rds: {
      name: "Amazon RDS Multi-AZ",
      description: "Managed relational database with automatic failover and backups.",
      benefits: ["Automated backups", "Multi-AZ deployment", "Read replicas", "Automatic patching"]
    },
    elasticache: {
      name: "Amazon ElastiCache",
      description: "In-memory caching service for improved application performance.",
      benefits: ["Sub-millisecond latency", "Redis/Memcached", "Automatic failover", "Cluster mode"]
    },
    s3: {
      name: "Amazon S3",
      description: "Object storage for static assets, backups, and data lakes.",
      benefits: ["99.999999999% durability", "Versioning", "Lifecycle policies", "Cross-region replication"]
    },
    vpc: {
      name: "Amazon VPC",
      description: "Isolated virtual network with public and private subnets across multiple AZs.",
      benefits: ["Network isolation", "Security groups", "NACLs", "VPC peering"]
    },
    cloudwatch: {
      name: "Amazon CloudWatch",
      description: "Monitoring and observability service for logs, metrics, and alarms.",
      benefits: ["Real-time monitoring", "Custom metrics", "Automated actions", "Log aggregation"]
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AWS Multi-Tier Architecture</h1>
          <p className="text-blue-200">Production-Ready, Highly Available, Scalable Design</p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 mb-6 border border-blue-500/30">
          
          {/* Internet / Users Layer */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500 rounded-lg px-6 py-3">
              <Globe className="text-green-400" size={24} />
              <span className="text-white font-semibold">Internet / Users</span>
            </div>
          </div>

          {/* Edge Layer */}
          <div className="mb-8 flex justify-center gap-4">
            <div 
              onClick={() => setSelectedComponent('route53')}
              className="bg-orange-500/20 border border-orange-500 rounded-lg px-6 py-4 cursor-pointer hover:bg-orange-500/30 transition-all"
            >
              <Globe className="text-orange-400 mx-auto mb-2" size={32} />
              <div className="text-white font-semibold text-sm">Route 53</div>
              <div className="text-orange-200 text-xs">DNS Service</div>
            </div>
            <div 
              onClick={() => setSelectedComponent('cloudfront')}
              className="bg-purple-500/20 border border-purple-500 rounded-lg px-6 py-4 cursor-pointer hover:bg-purple-500/30 transition-all"
            >
              <Zap className="text-purple-400 mx-auto mb-2" size={32} />
              <div className="text-white font-semibold text-sm">CloudFront</div>
              <div className="text-purple-200 text-xs">CDN</div>
            </div>
            <div 
              onClick={() => setSelectedComponent('waf')}
              className="bg-red-500/20 border border-red-500 rounded-lg px-6 py-4 cursor-pointer hover:bg-red-500/30 transition-all"
            >
              <Shield className="text-red-400 mx-auto mb-2" size={32} />
              <div className="text-white font-semibold text-sm">AWS WAF</div>
              <div className="text-red-200 text-xs">Firewall</div>
            </div>
          </div>

          {/* VPC Container */}
          <div 
            onClick={() => setSelectedComponent('vpc')}
            className="border-2 border-dashed border-blue-400 rounded-xl p-6 cursor-pointer hover:border-blue-300 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lock className="text-blue-400" size={20} />
              <span className="text-blue-300 font-semibold">VPC (Virtual Private Cloud)</span>
            </div>

            {/* Load Balancer Layer */}
            <div className="mb-6 flex justify-center">
              <div 
                onClick={(e) => { e.stopPropagation(); setSelectedComponent('alb'); }}
                className="bg-blue-500/20 border border-blue-500 rounded-lg px-8 py-4 cursor-pointer hover:bg-blue-500/30 transition-all"
              >
                <RefreshCw className="text-blue-400 mx-auto mb-2" size={32} />
                <div className="text-white font-semibold">Application Load Balancer</div>
                <div className="text-blue-200 text-xs">Multi-AZ Distribution</div>
              </div>
            </div>

            {/* Multi-AZ Layout */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Availability Zone 1 */}
              <div className="border border-cyan-500 rounded-lg p-4 bg-cyan-500/10">
                <div className="text-cyan-300 font-semibold text-sm mb-3 text-center">Availability Zone 1</div>
                
                {/* Public Subnet */}
                <div className="bg-green-500/10 border border-green-500/50 rounded p-3 mb-3">
                  <div className="text-green-300 text-xs mb-2">Public Subnet</div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('ec2'); }}
                    className="bg-amber-500/20 border border-amber-500 rounded px-3 py-2 cursor-pointer hover:bg-amber-500/30"
                  >
                    <Server className="text-amber-400 inline mr-2" size={20} />
                    <span className="text-white text-sm">EC2 Instance</span>
                  </div>
                </div>

                {/* Private Subnet */}
                <div className="bg-slate-700/30 border border-slate-600 rounded p-3">
                  <div className="text-slate-300 text-xs mb-2">Private Subnet</div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('rds'); }}
                    className="bg-indigo-500/20 border border-indigo-500 rounded px-3 py-2 mb-2 cursor-pointer hover:bg-indigo-500/30"
                  >
                    <Database className="text-indigo-400 inline mr-2" size={18} />
                    <span className="text-white text-xs">RDS Primary</span>
                  </div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('elasticache'); }}
                    className="bg-pink-500/20 border border-pink-500 rounded px-3 py-2 cursor-pointer hover:bg-pink-500/30"
                  >
                    <Zap className="text-pink-400 inline mr-2" size={18} />
                    <span className="text-white text-xs">ElastiCache</span>
                  </div>
                </div>
              </div>

              {/* Availability Zone 2 */}
              <div className="border border-cyan-500 rounded-lg p-4 bg-cyan-500/10">
                <div className="text-cyan-300 font-semibold text-sm mb-3 text-center">Availability Zone 2</div>
                
                {/* Public Subnet */}
                <div className="bg-green-500/10 border border-green-500/50 rounded p-3 mb-3">
                  <div className="text-green-300 text-xs mb-2">Public Subnet</div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('ec2'); }}
                    className="bg-amber-500/20 border border-amber-500 rounded px-3 py-2 cursor-pointer hover:bg-amber-500/30"
                  >
                    <Server className="text-amber-400 inline mr-2" size={20} />
                    <span className="text-white text-sm">EC2 Instance</span>
                  </div>
                </div>

                {/* Private Subnet */}
                <div className="bg-slate-700/30 border border-slate-600 rounded p-3">
                  <div className="text-slate-300 text-xs mb-2">Private Subnet</div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('rds'); }}
                    className="bg-indigo-500/20 border border-indigo-500 rounded px-3 py-2 mb-2 cursor-pointer hover:bg-indigo-500/30"
                  >
                    <Database className="text-indigo-400 inline mr-2" size={18} />
                    <span className="text-white text-xs">RDS Standby</span>
                  </div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setSelectedComponent('elasticache'); }}
                    className="bg-pink-500/20 border border-pink-500 rounded px-3 py-2 cursor-pointer hover:bg-pink-500/30"
                  >
                    <Zap className="text-pink-400 inline mr-2" size={18} />
                    <span className="text-white text-xs">ElastiCache</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Storage & Monitoring Layer */}
          <div className="mt-6 flex justify-center gap-4">
            <div 
              onClick={() => setSelectedComponent('s3')}
              className="bg-emerald-500/20 border border-emerald-500 rounded-lg px-6 py-4 cursor-pointer hover:bg-emerald-500/30 transition-all"
            >
              <HardDrive className="text-emerald-400 mx-auto mb-2" size={32} />
              <div className="text-white font-semibold text-sm">Amazon S3</div>
              <div className="text-emerald-200 text-xs">Object Storage</div>
            </div>
            <div 
              onClick={() => setSelectedComponent('cloudwatch')}
              className="bg-yellow-500/20 border border-yellow-500 rounded-lg px-6 py-4 cursor-pointer hover:bg-yellow-500/30 transition-all"
            >
              <Activity className="text-yellow-400 mx-auto mb-2" size={32} />
              <div className="text-white font-semibold text-sm">CloudWatch</div>
              <div className="text-yellow-200 text-xs">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Component Details Panel */}
        {selectedComponent && (
          <div className="bg-slate-800/70 backdrop-blur border border-blue-500/50 rounded-xl p-6 animate-fade-in">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{componentDetails[selectedComponent].name}</h3>
              <button 
                onClick={() => setSelectedComponent(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-blue-100 mb-4">{componentDetails[selectedComponent].description}</p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Benefits:</h4>
              {componentDetails[selectedComponent].benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <span className="text-slate-200 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4">
            <Shield className="text-green-400 mb-2" size={28} />
            <h4 className="text-white font-semibold mb-1">High Security</h4>
            <p className="text-green-200 text-sm">Multi-layered security with WAF, security groups, and private subnets</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
            <RefreshCw className="text-blue-400 mb-2" size={28} />
            <h4 className="text-white font-semibold mb-1">High Availability</h4>
            <p className="text-blue-200 text-sm">Multi-AZ deployment with automatic failover capabilities</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
            <Zap className="text-purple-400 mb-2" size={28} />
            <h4 className="text-white font-semibold mb-1">Auto Scaling</h4>
            <p className="text-purple-200 text-sm">Automatically scales based on demand to optimize costs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSArchitecture;