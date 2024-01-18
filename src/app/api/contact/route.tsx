import {NextResponse} from 'next/server';
import mongoose from 'mongoose';

import connectDB from '../..//lib/mongodb';
import Contact from '../../models/contact';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find({});

    return NextResponse.json({
      data: contacts,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({msg: ['Unable to fetch contacts.']});
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  const {fullname, email, message} = await req.json();

  try {
    await connectDB();
    await Contact.create({fullname, email, message});

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({msg: errorList});
    } else {
      return NextResponse.json({msg: ['Unable to send message.']});
    }
  }
}
