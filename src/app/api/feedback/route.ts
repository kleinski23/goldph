import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In a real app, this would be in a database
let feedbackStore: { id: string; feedback: string; timestamp: string }[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add feedback to our store with timestamp
    const newFeedback = {
      id: Date.now().toString(),
      feedback: data.feedback,
      timestamp: new Date().toISOString()
    };
    
    feedbackStore.push(newFeedback);
    console.log('New feedback:', newFeedback);

    // Send email notification
    await resend.emails.send({
      from: 'PH Gold Reserves <onboarding@resend.dev>', // Using Resend's default sender
      to: 'kleinski23@gmail.com',
      subject: 'New Feedback - PH Gold Reserves',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Feedback Received</h2>
          <p style="color: #666;"><strong>Time:</strong> ${new Date(newFeedback.timestamp).toLocaleString()}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="color: #333;"><strong>Feedback:</strong></p>
            <p style="color: #444; white-space: pre-wrap;">${data.feedback}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ 
      message: 'Feedback submitted successfully',
      feedback: newFeedback
    }, { 
      status: 200 
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ 
      error: 'Failed to submit feedback' 
    }, { 
      status: 500 
    });
  }
}

export async function GET() {
  try {
    return NextResponse.json({ 
      feedbacks: feedbackStore 
    }, { 
      status: 200 
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to fetch feedback' 
    }, { 
      status: 500 
    });
  }
} 