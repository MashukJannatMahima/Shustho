import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shustho</h1>
        <div>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Corporate Wellness</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-green-200">
        <h2 className="text-4xl font-bold">Welcome to Shustho</h2>
        <p className="mt-4 text-lg">Your go-to source for corporate wellness and healthy living.</p>
      </header>

      {/* Sections */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent>
              <h4 className="text-xl font-bold">Corporate Wellness</h4>
              <p>We offer customized wellness programs for organizations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-xl font-bold">Health Insights</h4>
              <p>Expert tips on maintaining a balanced and healthy life.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-xl font-bold">Consultation</h4>
              <p>Book a session with our experts to improve your well-being.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 Shustho. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
